const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://tommy:wUyVTq1PFfL39nei@cluster-tommy.o2vpw.mongodb.net/Reja?"

mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    UseUnifiedTopology: true,
},
(err, client) => {
    if(err) console.log("ERROR on connection MongoDB:");
    else {
        console.log("MongoDB connection succeed");
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 7002;
        server.listen(PORT, function(){
        console.log(
            `The server is Running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
    });
   }
});

// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, function(){
//     console.log(`The server is Running successfully on port: ${PORT}, http://localhost:${PORT}`);
// });