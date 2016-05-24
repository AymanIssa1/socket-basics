var moment = require('moment');
var now = moment();

console.log(now.format());
console.log(now.format('X'));
console.log(now.format('x'));

var timestamp = 1463999831182;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.format('h:mma'));
console.log(timestampMoment.local().format('h:mma'));

//console.log(now.format('h:mma'));
//console.log(now.format('MMM Do YYYY, h:mma'));
