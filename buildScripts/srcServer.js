require("@babel/register");
var express = require("express");
var path = require("path");
var open = require("open");
var webpack = require("webpack");
var config= require("../webpack.config.dev");

/*eslint-disable no-console*/
var port=4000;
var app=express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
 publicPath:config.output.publicPath
}));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.listen(port,function(err){
  if(err){
    console.log(err);
  }else{
    open('http://localhost:'+ port);
  }
});
