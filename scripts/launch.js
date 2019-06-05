const { readdirSync } = require('fs')
const { prompt } = require('inquirer')
const { fork } = require('child_process')

const examples = readdirSync('examples')

async function launch() {
  const { target } = await prompt([
    {
      name: 'target',
      message: 'Select a example',
      type: 'list',
      choices: examples
    }
  ])

// themeDir/index.js
  const { command } = await prompt([
    {
      name: 'command',
      message: 'Select a command',
      type: 'list',
      choices: [
        'dev',
        'view-info',
      ]
    }
  ])

  fork(
    require.resolve('vuepress/cli.js'),
    [command, `${process.cwd()}/examples/${target}`, ...process.argv.slice(2)],
    { stdio: 'inherit' }
  )
}

launch()

