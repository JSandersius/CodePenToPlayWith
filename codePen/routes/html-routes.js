// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

};

//_____________

// Routes
// =============================================================
require("./routes/html-routes.js")(app);

// Sets up the Express app to handle data parsing

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));



