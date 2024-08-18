const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:nida1984@cluster0.cs7tw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

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
