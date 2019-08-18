var request = require('request');
var fs = require('fs');

request("http://localhost:3000/white", function(err, res, body) {
    if (err) console.log(err);
    console.log(res.body);
    console.log(res.statusCode);
    console.log(res.headers);
    console.log(body);
})
.pipe(fs.createWriteStream('./file.txt'));

var options = {
    url:"http://localhost:3000/logRequestHeaders",
    headers:{'MY-HEADER':"my request header"}
}
var callback = function(err, res, body) {
    if (err) console.log(err);
    else console.log(body);
}
request(options, callback);