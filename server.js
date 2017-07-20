var express = require("express");
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/whoami", function(request, response) {

    var language = request.headers['accept-language'].split(";")[0],
        software = request.headers['user-agent'];
    software = software.substring(software.indexOf("("), software.indexOf(")") + 1);

    response.json({

        ipaddress: request.ip,
        language: language,
        software: software
    });
});

app.listen(process.env.PORT || 1337);