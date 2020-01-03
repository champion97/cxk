"use strict";

function route(handle, pathname, response, data) {
    if (typeof handle[pathname] === 'function') {
        // 路由处理
        handle[pathname](response, data);
    } else {
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;
