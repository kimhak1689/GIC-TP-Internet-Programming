const { KhmerDateTime } = require('./lib');

// const khmerDate = new KhmerDateTime();
const khmerDate = new KhmerDateTime(new Date());
console.log(khmerDate.getDate());