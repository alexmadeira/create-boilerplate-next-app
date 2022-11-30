const { execSync } = require('child_process')
const chalk = require('chalk')
const loading = require('./loading')

const runCommand = command => {
  try {
      execSync(`${command}`, { stdio: 'inherit' })
  } catch (error) {
      console.error(`Falha na execução ${command}`, error)
      return false
  }
  return true
}

const repoName = process.argv[2]

const gitCheckoutCommand = `git clone https://github.com/alexmadeira/nextJs-boilerplate ${repoName}`
const installDespCommand = `cd ${repoName} && npm install`


function cloneFiles(){
  console.log( chalk.yellow(`\n\n\nClonando para ${repoName}\n`))
  const checkout = runCommand(gitCheckoutCommand)
  if (!checkout) process.exit()

  console.log( chalk.yellow(`\n\n\nInstalando dependências\n`))
  const installedDeps = runCommand(installDespCommand)
  if (!installedDeps) process.exit()
}


module.exports = cloneFiles
