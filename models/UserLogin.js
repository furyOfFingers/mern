const { Schema, model } = require("mongoose");

const schemaLogin = new Schema({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = model("UserLogin", schemaLogin);
