const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const bodyParser = require('body-parser');
const expressValidator = require("express-validator")
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.urlencoded({extended: true}));
app.use('/views', express.static('views'));
app.use(expressValidator())
const list = [
  todo: "Things",
  yetTodo: true
 ,
  todo: "Make things way more complicated",
  yetTodo: false
];
const data = {
  todos: list
}

app.get("/", function(req, res) {
  res.render('todo', data);
});


app.post('/',function(req, res) {
  console.log(req.body);
  res.redirect('/');
})

app.post("/", function(req, res) {
  list.push({
    todo: req.body.todo,
    yetTodo: true
  })
  res.redirect('/');
})


app.listen(3000, function(){
console.log("Tough Actin' Tinactin!")
})
