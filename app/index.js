const express = require("express");
const app = express();
const env = require("./config/env");

const bodyParser = require("body-parser");
app.disable("x-powered-by");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.header({"Content-Type": "text/html"});
    res.status(200).send(`<h1>Hi Mom</h1>`);
});

app.listen(env.api.port, () => {
    console.log(`API running on ${env.api.host_alias} port ${env.api.port}`);
});