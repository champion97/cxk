"use strict";

const redis = require("redis"),
    client = redis.createClient({
        host: 'localhost',
        port: 6379
    });

// If you are using node v8 or higher, you can promisify node_redis with util.promisify as in:
const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);

client.on("error", function (err) {
    console.log("Error " + err);
});


// now getAsync is a promisified version of client.get:

// function get() {
//
//     const key = 'ping';
//     return getAsync(key).then(function (res) {
//         return res;
//     });
//
// }


// or using async await:
async function get() {
    const key = 'ping';
    return await getAsync(key)
}


// 执行测试
function test() {
    get().then((res) => {
        console.log(res)
    })
}

test();
