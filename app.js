const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser')

const routes = require('./routes') // It is equal to require('./routes/index')

const app = express();
const port = 3000;

app.engine("hbs", exphbs({ defaultLayout: "main", extname: '.hbs'}));
app.set("view engine", "hbs");

// setting static files
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes)

// localhost:3000 
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`);
});