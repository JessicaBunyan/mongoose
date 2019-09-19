const express = require("express");
const app = express();
const api = require("./api");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

app.set("port", (process.env.PORT || 8081));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use(cors());

app.use("/api",api);
app.use(express.static("static"));

app.use(morgan("dev"));

app.use(function(req,res){
    const err = new Error("not fouund");
    err.status = "not found";
    res.status(404).json(err);
})

mongoose.connect("mongodb://localhost:27017/virtualstandups", {useNewUrlParser: true})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connetion error"))

db.once("open", () => {
    console.log("Connected to mongoDB");
    
    app.listen(app.get("port"), function(){
        console.log("Listening on port " + app.get("port"));
    })
}) 