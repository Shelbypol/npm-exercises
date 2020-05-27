const $ = require('jquery');

const niceMessage = require('./say-hello');
const bye = require('./say-hello');
// const exportObject = require('./say-hello');

sayhello = () => console.log('hello');
sayhello();

$('body').html('hello');

console.log(nice());
console.log(bye);

// console.log(exportObject.nice(), exportObject.bye);
