const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const ItemsRouter = require('./Routers/ItemsRouter')
const AdminRouter = require('./Routers/AdminUserRouter')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use("/carento-main", ItemsRouter);
app.use("/carento-admins", AdminRouter);




mongoose
  .connect("mongodb://localhost:27017/carento", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDb is connected"))
  .catch(() => console.error("Error connection MongoDb"));



const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log("Server is running", PORT)
})