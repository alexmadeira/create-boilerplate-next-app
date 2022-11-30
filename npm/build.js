'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

const repoName = process.argv[2]

const cardData = {
  name: chalk.white('           Alex Madeira'),

  work: chalk.white('ReactJs and Front-end Developer at Petland Brasil'),
  instagram: chalk.gray('https://instagram.com/') + chalk.yellow('alex.c.madeira'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~alex.madeira'),
  github: chalk.gray('https://github.com/') + chalk.green('alexmadeira'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('alex-madeira'),
  web: chalk.cyan('https://www.alexmadeira.com.br/'),
  npx: chalk.red('npx') + ' ' + chalk.white('alexmadeira'),

  labelWork: chalk.white.bold('      Work:'),
  labelInstagram: chalk.white.bold(' Instagram:'),
  labelnpm: chalk.white.bold('       npm:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}


const startCommandsData = {
  successMsg: chalk.green(`Parabéns! ${repoName} foi criado em ${__dirname}/${repoName}\nDentro desse diretório, você pode executar vários comandos:`),
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

const newline = '\n'

const heading = `${cardData.name}`
const working = `${cardData.labelWork}  ${cardData.work}`
const instagraming = `${cardData.labelInstagram}  ${cardData.instagram}`
const npming = `${cardData.labelnpm}  ${cardData.npm}`
const githubing = `${cardData.labelGitHub}  ${cardData.github}`
const linkedining = `${cardData.labelLinkedIn}  ${cardData.linkedin}`
const webing = `${cardData.labelWeb}  ${cardData.web}`
const carding = `${cardData.labelCard}  ${cardData.npx}`


const card = heading + // data.name + data.handle
  newline + newline  + // Add one whole blank line
  working + newline + newline + // data.labelWork + data.work
  instagraming + newline + // data.labelInstagram + data.instagram
  npming + newline + // data.labelnpm + data.npm
  githubing + newline + // data.labelGitHub + data.github
  linkedining + newline + // data.labelLinkedIn + data.linkedin
  webing + newline + newline + // data.labelWeb + data.web
  carding // data.labelCard + data.npx

  const starcommands = startCommandsData.successMsg + newline + newline +
                      startCommandsData.dev + newline+
                      startCommandsData.devDescription + newline + newline +

                      startCommandsData.build + newline +
                      startCommandsData.buildDescription + newline + newline +

                      startCommandsData.start + newline +
                      startCommandsData.startDescription + newline + newline +

                      startCommandsData.lint + newline +
                      startCommandsData.lintMsg + newline + newline + newline + newline +

                      startCommandsData.suggestionMsg + newline + newline +
                      startCommandsData.suggestionCommand + newline + newline +

                      startCommandsData.footer;


fs.writeFileSync(path.join(__dirname, 'bin/card'), chalk.green(boxen(card, options)))
fs.writeFileSync(path.join(__dirname, 'bin/starcommands'), starcommands)
