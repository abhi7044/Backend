// Lecture 1
// const express = require("express");
// const app = express();
// const port = 8080;
// app.listen(port, () => {
//     console.log(`listening on port ${port}`);
// });


// lecture 2 / 3 
// const express = require("express");
// const app = express();
// const path = require("path");

// const port = 8080;

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));

// app.get("/", (req, res) => {
//     res.render("home.ejs");
// });


// app.get("/hello", (req, res) => {
//     res.send("hello");
// });

// app.listen(port, () => {
//     console.log(`listening on port ${port}`);
// });

// Part 5
// const express = require("express");
// const app = express();
// const path = require("path");

// const port = 8080;

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));

// app.get("/", (req, res) => {
//     res.render("home.ejs");
// });

// app.get("/hello", (req, res) => {
//     res.send("hello");
// });

// app.get("/rolldice", (req, res) => {
//     let diceVal =  Math.floor(Math.random() * 6) + 1;
//     res.render("rolldice.ejs", {num: diceVal});
// });

// app.listen(port, () => {
//     console.log(`listening onn port ${port}`);
// });

// Part 6
// const express = require("express");
// const app = express();
// const path = require("path");

// const port = 8080;

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));

// app.get("/", (req, res) => {
//     res.render("home.ejs");
// });

// app.get("/ig/:username", (req, res) => {
//     let { username } = req.params;
//     // console.log(username); 
//     res.render("instagram.ejs", { username });
// });

// app.get("/hello", (req, res) => {
//     res.send("hello");
// });

// app.get("/rolldice", (req, res) => {
//     let diceVal =  Math.floor(Math.random() * 6) + 1;
//     res.render("rolldice.ejs", {num: diceVal});
// });

// app.listen(port, () => {
//     console.log(`listening onn port ${port}`);
// }); 

// Part 7
// const express = require("express");
// const app = express();
// const path = require("path");

// const port = 8080;

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));

// app.get("/", (req, res) => {
//     res.render("home.ejs");
// });

// app.get("/ig/:username", (req, res) => {
//     let { username } = req.params;
//     // console.log(username); 
//     res.render("instagram.ejs", { username });
// });

// app.get("/hello", (req, res) => {
//     res.send("hello");
// });

// app.get("/rolldice", (req, res) => {
//     let diceVal =  Math.floor(Math.random() * 6) + 1;
//     res.render("rolldice.ejs", {diceVal: diceVal});
// });

// app.listen(port, () => {
//     console.log(`listening onn port ${port}`);
// }); 

// Part 8
// const express = require("express");
// const app = express();
// const path = require("path");

// const port = 8080;

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));

// app.get("/", (req, res) => {
//     res.render("home.ejs");
// });

// app.get("/ig/:username", (req, res) => {
//     const followers = ["adam", "bob", "steve", "abc"];
//     let { username } = req.params;
//     // console.log(username); 
//     res.render("instagram.ejs", { username , followers});
// });

// app.get("/hello", (req, res) => {
//     res.send("hello");
// });

// app.get("/rolldice", (req, res) => {
//     let diceVal =  Math.floor(Math.random() * 6) + 1;
//     res.render("rolldice.ejs", {diceVal: diceVal});
// });

// app.listen(port, () => {
//     console.log(`listening onn port ${port}`);
// }); 

// Part 9 => Instagram page with EJS

// const express = require("express");
// const app = express();
// const path = require("path");

// const port = 8080;

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));

// app.get("/", (req, res) => {
//     res.render("home.ejs");
// });

// app.get("/ig/:username", (req, res) => {
//     const { username } = req.params;
//     const instaData = require("./data.json");
//     const data = instaData[username];
//     if(data) {
//         res.render("instagram.ejs", { data });
//     } else {
//         res.render("error.ejs");
//     }
//     // console.log(instaData);
//     console.log(data);
    
// });

// app.get("/hello", (req, res) => {
//     res.send("hello");
// });

// app.get("/rolldice", (req, res) => {
//     let diceVal =  Math.floor(Math.random() * 6) + 1;
//     res.render("rolldice.ejs", {diceVal: diceVal});
// });

// app.listen(port, () => {
//     console.log(`listening onn port ${port}`);
// }); 

// Part 10

// const express = require("express");
// const app = express();
// const path = require("path");

// const port = 8080;

// app.use(express.static("public")) -- ye use hota hai usi directory me aor niche wala use karte hai outside of the directory 
// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__dirname, "/public/CSS")));
// app.use(express.static(path.join(__dirname, "/public/JS")));
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));

// app.get("/", (req, res) => {
//     res.render("home.ejs");
// });

// app.get("/ig/:username", (req, res) => {
//     const { username } = req.params;
//     const instaData = require("./data.json");
//     const data = instaData[username];
//     if(data) {
//         res.render("instagram.ejs", { data });
//     } else {
//         res.render("error.ejs");
//     }
    // console.log(instaData);
//     console.log(data);
    
// });

// app.get("/hello", (req, res) => {
//     res.send("hello");
// });

// app.get("/rolldice", (req, res) => {
//     let diceVal =  Math.floor(Math.random() * 6) + 1;
//     res.render("rolldice.ejs", {diceVal: diceVal});
// });

// app.listen(port, () => {
//     console.log(`listening onn port ${port}`);
// }); 

// Part 11
const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

// app.use(express.static("public")) -- ye use hota hai usi directory me aor niche wala use karte hai outside of the directory 
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "/public/CSS")));
app.use(express.static(path.join(__dirname, "/public/JS")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/ig/:username", (req, res) => {
    const { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data) {
        res.render("instagram.ejs", { data });
    } else {
        res.render("error.ejs");
    }
    // console.log(instaData);
    console.log(data);
    
});

app.get("/hello", (req, res) => {
    res.send("hello");
});

app.get("/rolldice", (req, res) => {
    let diceVal =  Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", {diceVal: diceVal});
});

app.listen(port, () => {
    console.log(`listening onn port ${port}`);
});  