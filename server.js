var express = require("express");
var app = express();

app.use(express.static('./app'));
app.use(express.static('./node_modules)'));

app.listen(8080, function(){
    console.log("Listening at port 8080");
})

exports = module.exports = app;