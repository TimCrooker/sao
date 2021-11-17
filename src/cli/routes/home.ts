import Choice from 'inquirer/lib/objects/choice'
import { ExitChoice, HelpChoice } from '.'
import { GritRoute } from '..'

/**
 * This is the home route when users input just the `grit` keyword with no commands\
 */
export const home: GritRoute = async (app, { args, options }) => {
	const defaultChoices = [
		{
			name: 'Run a generator',
			value: 'list',
		},
		{
			name: 'Install a new generator',
			value: 'install',
		},
		HelpChoice,
		ExitChoice,
	] as Choice[]

	const answers = await app.prompt([
		{
			name: 'whatNext',
			type: 'list',
			message: `What would you like to do?`,
			choices: defaultChoices,
		},
	])
	return await app.navigate(answers.whatNext)
}
