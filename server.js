var express = require("express")
var PORT = process.env.PORT || 3000;
var app = express()

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

var exphbs = require("express-handlebars")

app.engine("handlebars", exphbs({defaultLayout: "main"}))
app.set("view engine", "handlebars")

require("./controllers/burgers_controllers.js")(app);


app.listen(PORT, function(){
    console.log(`Server listening on: http://localhost:${PORT}`)
})