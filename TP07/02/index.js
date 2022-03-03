const { KhmerDateTime } = require('./lib');

// const khmerDate = new KhmerDateTime();
const khmerDate = new KhmerDateTime(new Date('2022-03-03T23:00:00'));
console.log(khmerDate.getDate());