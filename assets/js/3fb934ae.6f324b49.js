"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[240],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),g=a,f=m["".concat(u,".").concat(g)]||m[g]||p[g]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7720:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},u="Quick Start",c={unversionedId:"create-generator/quick-start",id:"create-generator/quick-start",title:"Quick Start",description:"Scaffold out a new generator",source:"@site/docs/create-generator/quick-start.md",sourceDirName:"create-generator",slug:"/create-generator/quick-start",permalink:"/Grit/docs/create-generator/quick-start",editUrl:"https://github.com/TimCrooker/Grit/edit/master/docs/docs/create-generator/quick-start.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Overview",permalink:"/Grit/docs/create-generator/overview"},next:{title:"Overview",permalink:"/Grit/docs/generator-file/overview"}},l=[{value:"Scaffold out a new generator",id:"scaffold-out-a-new-generator",children:[],level:2},{value:"Generator Structure",id:"generator-structure",children:[{value:"Example",id:"example",children:[{value:"prompts",id:"prompts",children:[],level:4}],level:3}],level:2}],p={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-start"},"Quick Start"),(0,o.kt)("h2",{id:"scaffold-out-a-new-generator"},"Scaffold out a new generator"),(0,o.kt)("p",null,"If you wish to dive right in"),(0,o.kt)("h2",{id:"generator-structure"},"Generator Structure"),(0,o.kt)("p",null,"This is the file structure of your new generator"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\ud83d\udce6grit-example\n\u2523 \ud83d\udcc2template\n \u2503 \u2523 \ud83d\udcdcgitignore\n \u2503 \u2523 \ud83d\udcdcLICENSE\n \u2503 \u2517 \ud83d\udcdcREADME.md\n \u2523 \ud83d\udcc2test\n \u2503 \u2523 \ud83d\udcc2__snapshots__\n \u2503 \u2503 \u2517 \ud83d\udcdctest.ts.snap\n \u2503 \u2517 \ud83d\udcdctest.ts\n \u2523 \ud83d\udcdc.gitignore\n \u2523 \ud83d\udcdcbabel.config.js\n \u2523 \ud83d\udcdcgenerator.ts\n \u2523 \ud83d\udcdcjest.config.js\n \u2523 \ud83d\udcdcLICENSE\n \u2523 \ud83d\udcdcpackage.json\n \u2523 \ud83d\udcdcREADME.md\n \u2523 \ud83d\udcdctsconfig.json\n \u2517 \ud83d\udcdcyarn.lock\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"template")," directory houses the files that grit will scaffold out when you run it."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Transpile the typescript ",(0,o.kt)("inlineCode",{parentName:"p"},"generator.ts")," file into ",(0,o.kt)("inlineCode",{parentName:"p"},"generator.js"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n# compiles the `generator.ts` file into generator.js\nyarn build\n# To run script with yarn use this instead\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Run the generator")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"grit ./ ../grit-example-output\n")),(0,o.kt)("p",null,"Here you see the file structure of the output matches the contents of the template directory since we are not performing any other actions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," \u2523 \ud83d\udcdc.gitignore\n \u2523 \ud83d\udcdcLICENSE\n \u2517 \ud83d\udcdcREADME.md\n")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This is the generator.ts file that we created above with grit-generator")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Generator, GeneratorConfig } from 'gritenv'\nimport path from 'path'\n\nconst config = { \n prompts(grit) {\n      this.input({\n        name: 'name',\n        message: 'What is the name of the project',\n        default: path.basename(grit.outDir),\n        filter: val => val.toLowerCase(),\n      })\n      this.input({\n        name: 'description',\n        message: 'How would you describe the project',\n        default: `my awesome new grit-generator`\n      })\n      this.input({\n        name: 'username',\n        message: 'What is your GitHub username',\n        default: grit.gitUser.username || grit.gitUser.name,\n        filter: val => val.toLowerCase(),\n        store: true\n      })\n      this.input({\n        name: 'email',\n        message: 'What is your email?',\n        default: grit.gitUser.email,\n        store: true\n      })\n      this.input({\n        name: 'website',\n        message: 'The URL of your website',\n        default(answers) {\n          return `github.com/${answers.username}`\n        },\n        store: true\n      })\n  },\n plugins: {\n  mergeFiles: []\n },\n  actions() {\n    this.add({ \n      files: '**',\n    })\n    this.move({\n      patterns: {\n        gitignore: '.gitignore',\n        '_package.json': 'package.json'\n      }\n    })\n },\n  async completed(grit) {\n    grit.gitInit()\n    await grit.npmInstall()\n    grit.showProjectTips()\n  }\n} as GeneratorConfig\n\nexport = new Generator(config)\n")),(0,o.kt)("p",null,"This example demonstrates a few key concepts that are required for creating generators. You see the main export has a three main items"),(0,o.kt)("h4",{id:"prompts"},"prompts"),(0,o.kt)("p",null,"The prompts function you see above returns an array of 5 prompt objects."))}m.isMDXComponent=!0}}]);