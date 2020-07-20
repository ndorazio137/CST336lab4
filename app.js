const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));


// routes
app.get("/", function(req, res) {
    res.render("index.html");
});

app.get("/mercury.html", function(req, res) {
    res.render("mercury.html");
});

app.get("/venus.html", function(req, res) {
    res.render("venus.html");
    
});

app.get("/earth.html", function(req, res) {
    res.render("earth.html");
});

app.get("/mars.html", function(req, res) {
    res.render("mars.html");
});

// starting server
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Express server is running...");
});