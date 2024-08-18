const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/profitpuls", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let ContactModel;
try {
  ContactModel = mongoose.model("contact");
} catch (error) {
  console.log("Creating new 'contact' model");
  ContactModel = mongoose.model(
    "contact",
    new mongoose.Schema({
      name: String,
      email: String,
      subject: String,
      message: String,
    })
  );
}

module.exports = ContactModel;
