console.log("hello, world");
//Imports from packages
const express = require('express');
const mongoose = require('mongoose');

//imports from other files
const authRouter = require('./routes/auth');
const adminRouter = require('./routes/admin');
const productRouter = require('./routes/product');


//init
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://nikhilshetye26:nikhil%40mongodb123@cluster0.wn99lyt.mongodb.net/?retryWrites=true&w=majority"

//middleware
//client -> middleware-> server -> Client
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);


//connections
mongoose
.connect(DB)
.then(() => {
    console.log("Connection successful");
}).catch((e => {
    console.log(e);
}));


//create api
// http://<ip>/hello-world
app.get('/hello-world', (req, res) => {
    res.json({ "hi": "Hello World" });
});
app.get('/', (req, res) => {
    res.json({ "name": "Nikhil" });
});
app.listen(PORT, "0.0.0.0",() => {
    console.log(`connected at port ${PORT}`);
});