const path = require('path');

process.argv = [process.argv[0], 'next', 'start'];
require(path.resolve(__dirname, '../node_modules/next/dist/bin/next'));
