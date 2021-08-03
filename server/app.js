const express = require("express")
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors')


const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



mongoose
.connect(require("./config/index").MONGO_URI, {useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log(err))


app.use("/api/auth", require("./routes/auth.routes"))
app.use("/api/main", require("./routes/main"))
app.use("/api/employees", require("./routes/employees"))
app.use("/api/companies", require("./routes/companies"))
app.use("/api/navbar", require("./routes/navbar"))


const port = require("./config/index").PORT

app.listen(port, () => console.log(`Server is listening on ${port}`))