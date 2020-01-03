"use strict";

const userService = require("../service/user");

function getUserInfo(response, data) {

    let userInfo = userService.getUserInfo();

    //当Content-Type为"text/plain"时，返回的内容将直接显示
    response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
    response.write(`用户名：${userInfo}`);
    response.end();

}

exports.getUserInfo = getUserInfo;
