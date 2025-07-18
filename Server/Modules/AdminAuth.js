const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const AdminScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    reminder: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const saltRounds = 10;
AdminScheme.pre("save", async function(next){
    if (!this.isModified("password")) return next() 
    this.password = await bcrypt.hash(this.password, saltRounds)
    next()
})


AdminScheme.methods.comparePassword = function (plainPassword) {
    return bcrypt.compare(plainPassword, this.password)
}


module.exports = mongoose.model("Admins", AdminScheme);