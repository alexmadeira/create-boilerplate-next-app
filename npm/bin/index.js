#!/usr/bin/env node
const loading = require('./loading')
const coneFile = require('./coneFile')
'use strict'

const fs = require('fs')
const path = require('path')
const card = fs.readFileSync(path.join(__dirname, 'card'), 'utf8')

console.log(card)


async function init(){
  coneFile()
}

loading('Verificando Pacote',30, init)
