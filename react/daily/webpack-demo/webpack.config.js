const path = require('path');
module.exports = {
    entry: './app/index.js', // It required entry point for your application
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
    output:{
        path: path.resolve(__dirname,'dist'),  // It require absolute paths i.e. c:/drive/folder/sub-folder ...
        filename: 'bundle.js', // filename of your output file
    }
}