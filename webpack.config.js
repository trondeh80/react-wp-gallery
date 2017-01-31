const getConfig = require('hjs-webpack') ;

const config = getConfig({
    in: 'src/js/index.js',
    out: 'dist/min/',
    clearBeforeBuild: true,
    https: true
}) ;

module.exports = config ;