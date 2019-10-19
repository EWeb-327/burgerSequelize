var express = require("express")
var app = express()
var Burger = require("../models/burger")
module.exports = function(app){

app.get("/", function(req, res){
    Burger.findAll().then(function(burgers){
        res.render("index", {
            burgers
        })
    });
})

app.post("/api/burgers", function(req,res){
    Burger.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }).then(function(data){
        res.end();
    });
});

app.put("/api/burgers/:id", function(req,res){
    Burger.update({
        where: {
            id: req.params.id
        }
    }).then(function(data){
        res.json(data)
    })
});

app.delete("/api/burgers/:id", function(req,res){
   Burger.destroy({
       where: {
           id: req.params.id
       }
   }).then(function(data){
       res.json(data)
   })
});

}