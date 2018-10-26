"use strict";
const { execFile } = require("child_process");
const { clearConsole, printDevServerInfo } = require("./utils.js");
const chalk = require("chalk");
const dirCommand = require("@babel/cli/lib/babel/dir.js").default;
const parseArgv = require("@babel/cli/lib/babel/options.js").default;
const path = require("path");
var { configure } = require("enzyme");
var Adapter = require("enzyme-adapter-react-16");

configure({ adapter: new Adapter() });

function spawnTest(port) {
  const cp = execFile(require.resolve("react-scripts/bin/react-scripts.js"), [
    "test"
  ]);
  cp.stdout.on("data", function(data) {
    console.log(data.toString());
  });
  return cp;
}

/**
 * Starts the styleguide dev server
 */
async function startTest(port) {
  var app = spawnTest();
}

/**
 * Starts a dev server
 * @param {string}  type  The servers type
 */
function runTests() {
  console.log(chalk.cyan("Starting test...\u001b[39m"));

  // Spawn Babel server
  process.env.NODE_ENV = "test";
  process.env.BABEL_ENV = "test";

  const cp = execFile(require.resolve("react-scripts/bin/react-scripts.js"), [
    "test"
  ]);
  cp.stdout.on("data", function(data) {
    console.log(data.toString());
  });
}
module.exports = { runTests };
