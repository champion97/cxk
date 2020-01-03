"use strict";


function sayHello(response, data) {

    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    response.write('<h1>Hello World!!!</h1>');
    response.end();

}

exports.sayHello = sayHello;
