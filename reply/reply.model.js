const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const replySchema = new Schema({
  
  topic: String ,
  replie: String,
  username: String
});

module.exports = mongoose.model("replie" , replySchema )