"use strict";

const express = require("express");
const compression = require("compression");
const serveStatic = require("serve-static");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");

const app = express();

app.set("views", "./static");
app.set("view engine", "html");
app.engine("html", require("hbs").__express);

app.use(favicon("static/favicon.ico"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(serveStatic("build"));

// sessions
app.use(require("./db").sessionFunc);

// routes
app.use(require("./router"));

const port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
