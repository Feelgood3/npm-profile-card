#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

'use strict'

// Pull in our modules
import chalk from 'chalk'
import boxen from 'boxen'

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('           Sergio Moncada Ojara'),
  handle: chalk.white('@FeelgoodV3'),
  work: chalk.white('Full Stack Developer'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('FeelgoodV3'),
  github: chalk.gray('https://github.com/') + chalk.green('Feelgood3'),
  linkedin: chalk.gray('https://www.linkedin.com/in/') + chalk.blue('sergiomoncadao'),
  npx: chalk.red('npx') + ' ' + chalk.white('feelgoodv3'),
  labelWork: chalk.white.bold('    Work:'),
  labelTwitter: chalk.white.bold(' Twitter:'),
  labelGitHub: chalk.white.bold('  GitHub:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  labelCard: chalk.white.bold('    Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const carding = `${data.labelCard}  ${data.npx}`

const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + newline + // data.labelLinkedIn + data.linkedin
               // data.labelWeb + data.web
               carding // data.labelCard + data.npx

console.log(chalk.green(boxen(output, options)))
