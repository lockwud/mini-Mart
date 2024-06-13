const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const bodyParser = require("body-parser")
dotenv.config()
const port = process.env.PORT|| 3000

const app = express();

app.use(morgan("dev"))
app.use(bodyParser.json())


const indexRoute = require("./src/routes/index");

app.use("/api", indexRoute);


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
