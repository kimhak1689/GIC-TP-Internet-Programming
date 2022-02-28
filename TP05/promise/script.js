const db1 = {
  "1": { id: 1, sex: 'M', pic: 'a'},
  "4": { id: 4, sex: 'F', pic: 'a'},
  "6": { id: 6, sex: 'F', pic: 'a'},
}
const db2 = {
  "2": { id: 2, sex: 'F', pic: 'a'},
  "5": { id: 5, sex: 'M', pic: 'a'},
}
const db3 = {
  "3": { id: 3, sex: 'M', pic: 'a'},
}

const metaData = {
  "1": "db1",
  "2": "db2",
  "3": "db3",
  "4": "db1",
  "5": "db2",
  "6": "db1",
}

// const userData = {
//   "1": { name: "Boupha", age: 18, private: false},
//   "2": { name: "chakra", age: 18, private: false},
//   "3": { name: "Champey", age: 18, private: false},
//   "4": { name: "Dara", age: 18, private: false},
//   "5": { name: "Daevy", age: 18, private: false},
//   "6": { name: "Chhorvon", age: 18, private: false},
// }
// const metaData = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// const retrieveAll  = async function() {
//   let results = await Promise.all([db1, metaData, userData])
//   console.log(result);
// }

Promise.all([db1, metaData]).then((values) => {
  console.log(values);
});