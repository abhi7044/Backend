const express = require("express");
const app = express();

// console.dir(app);

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// Part 2
app.use((req, res) => {
    console.log("request received");
});

// Part 3
app.use((req, res) => {
    console.log(req);
    console.log("request received");
    res.send("this is a basic response");
    
    res.send({
        name: "apple",
        color: "red",
    });
    let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>";
    res.send(code);
}); 

// Part 4
app.get("/", (req, res) => {
    res.send("hello i am root");
})
app.get("/apple", (req, res) => {
    res.send("you contacted apple path");
})
app.get("/orange", (req, res) => {
    res.send("you contacted orange path");
})

app.get("/*splat", (req, res) => {
    res.send("this path does not exist");
});
app.post("/", (req, res) => {
    res.send("you sent a post request to root");
});

// Part 5
app.get("/", (req, res) => {
    res.send("hello i am root");
})

/app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    let htmlStr = `<h1>Welcome to the page of @${username}.</h1>`
    res.send(htmlStr);
    // console.log(req.params);
    res.send("hello i am root");
})

// Part 6
app.get("/search", (req, res) => {
    // console.log(req.query);
    let { q } = req.query;
    if(!q) {
        res.send("<h1>nothing searched</h1>");
    }
    res.send(`<h1>search results for query: ${q}</h1>`);
})