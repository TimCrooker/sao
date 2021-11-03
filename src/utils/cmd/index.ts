import { exec } from 'child_process'
import spawn from 'cross-spawn'
import logUpdate from 'log-update'
import { promisify } from 'util'
import { GritError } from '../error'
import { logger } from '../logger'
import { spinner } from '../spinner'

export type NPM_CLIENT = 'npm' | 'yarn' | 'pnpm'

let cachedNpmClient: NPM_CLIENT | null = null

export function setNpmClient(npmClient: NPM_CLIENT): void {
	cachedNpmClient = npmClient
}

export function getNpmClient(): NPM_CLIENT {
	if (cachedNpmClient) {
		return cachedNpmClient
	}

	if (spawn.sync('yarn', ['--version']).status === 0) {
		cachedNpmClient = 'yarn'
	} else {
		cachedNpmClient = 'npm'
	}

	return cachedNpmClient
}

export function getScriptRunner(npmClient: NPM_CLIENT): 'npm run' | 'yarn' {
	const cmdRunner = npmClient === 'npm' ? 'npm run' : 'yarn'
	return cmdRunner
}

export interface InstallOptions {
	/** Install directory */
	cwd: string
	/** Package manager being used */
	npmClient?: NPM_CLIENT
	/** Package manager install CLI options */
	installArgs?: string[]
	/** Names of additional packages to install */
	packages?: string[]
	/** Run install as devDependencies */
	saveDev?: boolean
	registry?: string
}

export const installPackages = async ({
	cwd,
	npmClient: _npmClient,
	installArgs,
	packages,
	saveDev,
	registry,
}: InstallOptions): Promise<{ code: number }> => {
	const npmClient = _npmClient || getNpmClient()

	const packageName = packages ? packages.join(', ') : 'packages'

	return new Promise((resolve, reject) => {
		// `npm/pnpm/yarn add <packages>`
		// `npm/pnpm/yarn install`
		const args = [packages ? 'add' : 'install'].concat(packages ? packages : [])
		if (saveDev) {
			args.push(npmClient === 'npm' ? '-D' : '--dev')
		}
		if (registry) {
			args.push('--registry', registry)
		}

		if (installArgs) {
			args.push(...installArgs)
		}

		logger.debug(npmClient, args.join(' '))
		logger.debug('install directory', cwd)
		spinner.start(`Installing ${packageName} with ${npmClient}`)
		const ps = spawn(npmClient, args, {
			stdio: [0, 'pipe', 'pipe'],
			cwd,
			env: Object.assign(
				{
					FORCE_COLOR: true,
					/* eslint-disable camelcase */
					npm_config_color: 'always',
					npm_config_progress: true,
					/* eslint-enable camelcase */
				},
				process.env
			),
		})

		let stdoutLogs = ''
		let stderrLogs = ''

		ps.stdout &&
			ps.stdout.setEncoding('utf8').on('data', (data) => {
				if (npmClient === 'pnpm') {
					stdoutLogs = data
				} else {
					stdoutLogs += data
				}
				spinner.stop()
				logUpdate(stdoutLogs)
				spinner.start()
			})

		ps.stderr &&
			ps.stderr.setEncoding('utf8').on('data', (data) => {
				if (npmClient === 'pnpm') {
					stderrLogs = data
				} else {
					stderrLogs += data
				}
				spinner.stop()
				logUpdate.clear()
				logUpdate.stderr(stderrLogs)
				logUpdate(stdoutLogs)
				spinner.start()
			})

		ps.on('close', (code) => {
			spinner.stop()
			// Clear output when succeeded
			if (code === 0) {
				logUpdate.clear()
				logUpdate.stderr.clear()
				logger.success(`Installed ${packageName}`)
				resolve({ code })
			} else {
				reject(new GritError(`Failed to install ${packageName} in ${cwd}`))
			}
		})

		ps.on('error', reject)
	})
}

export interface RunNpmScriptOptions {
	/** the path to the directory commands will run in*/
	cwd: string
	/** script from cwd package.json to run */
	script: string
	/** Package manager being used */
	npmClient?: NPM_CLIENT
	/** Argunemets to be appended to the command line */
	args?: string[]
}

export async function runNpmScript({
	cwd,
	script,
	npmClient: _npmClient,
	args: _args,
}: RunNpmScriptOptions): Promise<void> {
	const npmClient = _npmClient || getNpmClient()
	const npmRunner = getScriptRunner(npmClient)

	const args = [`--prefix ${cwd}`].concat(_args ? _args : [])

	const command = `${npmRunner} ${script} ${args.join(' ')}`

	try {
		await promisify(exec)(command)
	} catch (error) {
		logger.error('Failed to execute command', command, 'with error:', error)
	}
}
