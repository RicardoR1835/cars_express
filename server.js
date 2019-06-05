var express = require("express");

var app = express();

app.get('/', function(request, response) {
    app.use(express.static(__dirname + "/static"));

    response.send("<h1>Hello Express</h1>")
})

app.listen(8000, function() {
    console.log("listening to port 8000");
})