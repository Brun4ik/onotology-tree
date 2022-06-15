require('dotenv').config()
const express = require("express");
const sequelize = require("./db");
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require("path");
// const fs = require('fs')
// const path = require('path');
const PORT = process.env.PORT || 5000

const app = express();
app.use(cors())
app.use(express.json())

app.use(express.static(
    path.join(__dirname, '../ui/dist')
))
app.use('/api', router)
// обработка ошибок, последний middleware
app.use(errorHandler)
const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
start()






// app.get('/', function (request, response) {
//     response.send(data);
//     console.log(data);
// })

// app.use('/', function (request, response) {
//     response.send(__dirname + "../src/index.ts");
//   });