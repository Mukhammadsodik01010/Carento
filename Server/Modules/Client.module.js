const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const ClientSchema = new mongoose.Schema({
  username: {
    type: String,
    required: String,
  },
  email: {
    type: String,
    required: String,
    unique: true,
  },
  password: {
    type: String,
    required: String,
  },
},
    {
    timestamps:true
});

const saltRounds = 10;

ClientSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, saltRounds);
  next();
});

ClientSchema.methods.comparePassword = function (plainPassword) {
  return bcrypt.compare(plainPassword, this.password);
};

module.exports = mongoose.model("Client", ClientSchema);
