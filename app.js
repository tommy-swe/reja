
console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
// const http = require("http");
const fs = require("fs");


// MongoDB chaqirish section===

const db = require("./server").db();
const mongodb = require("mongodb");


let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
});


// 1 kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// 2: Session code
// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs"); // backend ichida html front end yasaymiz


// 4 Routing Code
app.post("/create-item", (req, res) => {
    console.log('user entered /create-item');
    console.log(req.body);     // post bu DB-ga malumot olip keladi
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        console.log(data.ops);
        res.json(data.ops[0]);
        // if(err) {
        //     console.log(err);
        //     res.end("something went wrong!");
        // } else {
        //     res.end('Successfully added');
        // }
    });
});
    // res.end("success");
//    res.json({test: "success"});

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne(
    {_id: new mongodb.ObjectId(id) }, 
    function(err, data) {
        res.json({state: "success" });
    });
});


app.get('/author', (req, res) => {
    res.render("author", {user: user});
});

app.get("/", async function(req, res) {
    console.log('user entered /');
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("Something went wrong!");
        } else {
            // console.log(data);
            res.render("reja", {items: data});  // get DB-dan malumotni olish va uqish uchun
        }
    }); 
});


module.exports = app;
// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, function(){
//     console.log(`The server is Running successfully on port: ${PORT}, http://localhost:${PORT}`);
// });


// 

