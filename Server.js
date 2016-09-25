var express = require("express"),
    app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/navbar-nav.html");
})

app.listen(3333, function(){
    console.log("listening on port 3333");
})