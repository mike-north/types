const shell = require('shelljs');
const path = require('path');

const formatters = path.join(path.dirname(require.resolve('libkit')), 'lib', 'vscode');

let tsc = shell.exec('tsc -p tsconfig.json --noEmit');
let tslint = shell.exec(`tslint -p . --formatters-dir ${formatters} --format tsc`);

shell.exit(tsc.code || tslint.code);
