const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5aca9000ee4e2e9be4b10c8f'}).then((todo) => {

});

Todo.findByIdAndRemove('5aca9000ee4e2e9be4b10c8f').then((todo) => {
  console.log(todo);
});