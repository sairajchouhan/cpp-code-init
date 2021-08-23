#!/usr/bin/env node

const fs = require('fs')

const content = `
#include <iostream>
using namespace std;

int main(){
  #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
  #endif

  cout << "You are Beautiful" << endl;
  return 0;
}
`

const folderName = 'cpp-code-init'

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName)
  }
} catch (err) {
  console.error(err)
}

fs.writeFile(`${folderName}/main.cpp`, content, (err) => {
  if (err) {
    console.error(err)
    return
  } else {
    fs.writeFile(`${folderName}/input.txt`, '', (err) => {
      if (err) {
        console.log(err)
        reutrn
      }
    })
    fs.writeFile(`${folderName}/output.txt`, '', (err) => {
      if (err) {
        console.log(err)
        reutrn
      }
    })
  }
})

const pkgjson = require('./userPackage.json')
fs.writeFile(`${folderName}/package.json`, JSON.stringify(pkgjson), (err) => {
  if (err) {
    console.log(err)
    return
  }
})

const chalk = require('chalk')
const boxen = require('boxen')

const greeting = chalk.white.bold(`
Follow bellow steps to get started:
`)
const cdmain = chalk.cyan(`cd main`)
const npmInstall = chalk.cyan(`npm install`)
const npmStart = chalk.cyan(`npm start`)
const check = chalk.white.bold(`
check your output.txt :)
`)

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: 'green',
  backgroundColor: '',
}

const show = `
${greeting}
${cdmain}
${npmInstall}
${npmStart}
${check}
`
const msgBox = boxen(show, boxenOptions)
console.log(msgBox)
