const mongoose = require("mongoose");

const user_schema = mongoose.Schema({
  name: { type: String, required: true },

});

module.exports = mongoose.model("document_name", user_schema);
