// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a9cd7cc916627c054b9e926')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').findOneAndUpdate({
  //   _id: new ObjectID('5a9cb95b2ab6e35f1e41ddb2')
  // }, {
  //   $set: {
  //     name: 'David'
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').findOneAndUpdate({
  //   _id: new ObjectID('5a9cb95b2ab6e35f1e41ddb2')
  // }, {
  //   $inc: {
  //     age: 2
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // client.close();
});
