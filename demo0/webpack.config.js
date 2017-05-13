 var path = require('path');
 module.exports = {
     entry: './build.js',
     output: {
     	 //path: './dist',
         path: path.resolve(__dirname, './js/dist'),
         filename: 'build.bundle.js'
     }
 };