"use strict";

const http = require("http");
const url = require("url");

function start (route, handle) {

    http.createServer(function (request, response) {

        // 打印请求日志
        let pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        // 处理请求
        route(handle, pathname, response);

    }).listen(12580);

    console.log('Server running at http://127.0.0.1:12580/');

}

exports.start = start;
