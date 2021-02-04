//Dependencies, add more here later
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


//Express part/port
const app = express ();
var PORT = process.env.PORT || 8080;


const db = require("./models");
const HTMLroutes = require("./routes/html");
const APIroutes = require("./require/APIroutes");


//Express hookup with everything else 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//using css, js, etc.
app.use(express.static("public"));

//Dearest Morgan, ...
app.use(logger("dev"));

//calling the routes
app.use(require("./routes/HTMLroutes"));
app.use(require("./require/APIroutes"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
} )

//PORT function
app.listen(PORT, function () {
    console.log(`App listening on http://localhost:${PORT}`);
    
});