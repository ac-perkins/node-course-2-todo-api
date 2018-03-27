// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// let obj = new ObjectID();
// console.log(obj);


// ES6 object destructuring
// let user = {name: 'alex', age: 35};
// let {name} = user;
// console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   test: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
    
  // });

  // Insert new doc into Users (name, age, location)

  // db.collection('Users').insertOne({
  //   name: 'Alex',
  //   age: 35,
  //   location: 'Takoma Park, MD'
  // }, (err, res) => {
  //   if (err) {
  //     return console.log('Unable to insert user', todo);
  //   }

  //   console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  db.close();
});