console.log("Web serverni boshlash");
const express =  require("express");
const app = express();
const http = require("http");

// 1 kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));




// 2: Session code
// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs"); // backend ichida html front end yasaymiz


// 4 Routing Code
app.get("/hello", function(req, res) {
    res.end('<h1 style="background: red"> Hello World! by BekzodAli</h1>');
});

app.get("/gift", function(req, res) {
    res.end('<h1> Siz sovgalar bolimidasiz! </h1>');
});

app.get("/blog", function(req, res) {
    res.end('<h1 style="background: green"> Siz Blog bolimidasiz! </h1>');
});


const server = http.createServer(app);
let PORT = 3001;
server.listen(PORT, function(){
    console.log(`The server is Running successfully on port: ${PORT}`);
});
