const path = require('path');

module.exports = {
  // Entry point for your SCSS files
  entry: path.resolve(__dirname, 'scss/main.scss'),

  // Output directory and file for your compiled CSS
  output: {
    path: path.resolve(__dirname, 'styles'),
    filename: 'main.css',
  },

  // Options for the Sass compiler
  sassOptions: {
    outputStyle: 'compressed', // Options: 'nested', 'expanded', 'compact', 'compressed'
  },

  // Option to watch files and directories
  watch: true,
};
