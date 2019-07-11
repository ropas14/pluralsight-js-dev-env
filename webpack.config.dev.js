import path from 'path';

module.exports={
  devtool:"inline-source-map",
  entry:[
    path.resolve(__dirname,'src/index')
  ],
  target:'web',
  output:{
    path:path.resolve(__dirname,'src'),
    publicPath:'/',
    filename:'bundle.js'
  },
  plugins:[],
  module:{
    rules:[
      {test: /\.js$/,
        exclude:/node_modules/,
         loader:'babel-loader'},
      {test:/\.css/,
         loaders:['style-loader','css-loader']}
    ]
  }

}
