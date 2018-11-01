module.exports = {
  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        include: __dirname + '/src/app/create',
       },
       {
        test: /shadow\.css$/,
        loader: 'css-loader',
        include: __dirname + '/src',
       }
    ],
  }
};
