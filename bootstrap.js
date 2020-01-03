"use strict";

const server = require("./server");
const router = require("./router");

const helloController = require("./controller/hello");
const userController = require("./controller/user");

// 自定义请求handler
let handler = {};
handler["/"] = helloController.sayHello;
handler["/user/info"] = userController.getUserInfo;

server.start(router.route, handler);
