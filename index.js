const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// const cors = require("cors");
const authRoute = require("./routes/auth");

app.use("/api/auth", authRoute);

app.use(bodyParser.json({ limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true}))
// app.use(cors());
dotenv.config();
app.use(express.json());
mongoose
.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(console.log("connected to MongoDB"))
.catch((err) => console.log(err));



app.listen("5000", () => {
    console.log("Backened is running");
});