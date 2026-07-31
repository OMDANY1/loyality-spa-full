const path = require('path');

process.argv = [process.argv[0], 'next', 'dev'];
require(path.resolve(__dirname, '../node_modules/next/dist/bin/next'));
