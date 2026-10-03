// Part 1
const express = require("express");
const app = express();
const port = 8080;

app.get("/register", (req, res) => {
    let {user, password} = req.query; //for deconstruct in the form of object 
  res.send(`standard GET response. Welcome ${user}!`);
}); 

app.post("/register", (req, res) => {
  res.send("standard POST response");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

// Part 2
const express = require("express");
const app = express();
const port = 8080;
 
app.use(express.urlencoded({extended: true})); //middleware 
app.use(express.json());

app.get("/register", (req, res) => {
    let {user, password} = req.query; //for deconstruct in the form of object 
  res.send(`standard GET response. Welcome ${user}!`);
}); 

app.post("/register", (req, res) => {
    // console.log(req.body);
    // res.send("standard POST response");
    let {user, password } = req.body;  
    res.send(`standard POST response. Welcome ${user}`);
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
