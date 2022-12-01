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
const removePrivateFilesCommand = `cd ${repoName} && rm -rf npm/`
const removeGitRemoteCommand = `cd ${repoName} && git remote remove origin`




const startCommandsData = {
  successMsg: `${chalk.white('Parabéns!')} ${chalk.green(repoName)} ${chalk.white('foi criado em')} ${chalk.yellow(`${__dirname}/${repoName}`)}\n${chalk.white("Dentro desse diretório, você pode executar vários comandos:")}`,
  dev: chalk.cyan('   npm run dev'),
  devDescription: chalk.white('     Executa o next dev para iniciar o Next.js no modo de desenvolvimento'),

  build: chalk.cyan('   npm run build'),
  buildDescription: chalk.white('     Executa a next build para criar o aplicativo para uso em produção'),

  start: chalk.cyan('   npm run start'),
  startDescription: chalk.white('     Executa next start para iniciar um servidor de produção Next.js'),

  lint: chalk.cyan('    npm run lint'),
  lintMsg: chalk.white('      Executa o next lint para definir a configuração ESLint integrada do Next.js'),

  suggestionMsg: chalk.white('Sugiro que você comece digitando:'),
  suggestionCommand: `${chalk.cyan('    cd')} ${repoName} \n${chalk.cyan('   npm run dev')}`,

  footer:'👍🏾'
}


const starcommands =  startCommandsData.successMsg + '\n\n' +
                      startCommandsData.dev + '\n' +
                      startCommandsData.devDescription + '\n\n' +

                      startCommandsData.build + '\n' +
                      startCommandsData.buildDescription + '\n\n' +

                      startCommandsData.start + '\n' +
                      startCommandsData.startDescription + '\n\n' +

                      startCommandsData.lint + '\n' +
                      startCommandsData.lintMsg + '\n\n\n\n' +

                      startCommandsData.suggestionMsg + '\n\n' +
                      startCommandsData.suggestionCommand + '\n\n' +

                      startCommandsData.footer;



async function cloneFiles(){
  console.log( chalk.yellow(`\n\n\nClonando para ${repoName}\n`))
  const checkout = runCommand(gitCheckoutCommand)
  if (!checkout) process.exit()

  console.log( chalk.yellow(`\n\n\nInstalando dependências\n`))
  const installedDeps = runCommand(installDespCommand)
  if (!installedDeps) process.exit()

  console.log( chalk.yellow(`\n\n\nRemovendo arquivos de instalação\n`))
  const removePrivateFiles = runCommand(removePrivateFilesCommand)
  if (!removePrivateFiles) process.exit()
  const removeGitRemote = runCommand(removeGitRemoteCommand)
  if (!removeGitRemote) process.exit()

  await loading('Montando Pacote',20, ()=>{console.log(starcommands)})
}


module.exports = cloneFiles
