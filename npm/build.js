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

fs.writeFileSync(path.join(__dirname, 'bin/card'), chalk.green(boxen(card, options)))

