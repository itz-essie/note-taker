const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");


// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. Use this later in listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.listen(PORT, function(){
    console.log("App is lisrening on PORT: " + PORT);
});