const $ = require('jquery');
const niceMessage = require('./say-hello.js');

sayhello = () => console.log('hello');
sayhello();

$('body').html('hello');

console.log(nice());