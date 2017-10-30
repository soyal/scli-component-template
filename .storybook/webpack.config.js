const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [ 'style-loader', 'css-loader', 'less-loader' ]
      }
    ]
  }
}