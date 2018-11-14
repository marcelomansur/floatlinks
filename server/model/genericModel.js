var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/floatlinks');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("conectou")
  // we're connected!
});

var kittySchema = new mongoose.Schema({
  name: String
});

var Kitten = mongoose.model('Kitten', kittySchema);

var fluffy = new Kitten({
  name: 'fluffy'
});

fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
});

Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})