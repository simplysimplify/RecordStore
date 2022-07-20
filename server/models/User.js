const { Schema } = require("mongoose");
const mongoose = require('mongoose');

const bcrypt = require("bcrypt");
const Wishlist = require("./Wishlist")

const userSchema = new Schema({
 username: {
  type: String,
  required: true,
  unique: true,
 },

 password: {
  type: String,
  required: true,
  unique: true,
 },

 email: {
  type: String,
  required: true,
  unique: true,
 },
 
 wishlists: [Wishlist.schema]
});

userSchema.pre("save", async function (next) {
 if (this.isNew || this.isModified("password")) {
  const saltRounds = 10;
  this.password = await bcrypt.hash(this.password, saltRounds);
 }

 next();
});

userSchema.methods.isCorrectPassword = async function (password) {
 return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
