const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:nida1984@cluster0.cs7tw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

let ServicesModel;
try {
  ServicesModel = mongoose.model("services");
} catch (error) {
  console.log("Creating new 'services' model");
  ServicesModel = mongoose.model(
    "services",
    new mongoose.Schema({
      name: String,
      desc: String,
    })
  );
}

module.exports = ServicesModel;
