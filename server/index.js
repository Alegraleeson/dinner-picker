require('dotenv').config()
const express = require("express");
const cors = require("cors");
const path = require('path');

const app = express();

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../public/index.html'))
})
 
app.use(express.static(path.join(__dirname, '../public')))
 

app.use(cors());

app.use(express.json());

const {SERVER_PORT} = process.env

const { seed, getDinners, getOption, getAllOptions, deleteOption, addOption, saveOption, getList, deleteListItem } = require('./controller')


app.get("/api/option", getOption);
app.get("/api/options", getAllOptions);
app.delete("/api/option/:id", deleteOption);
app.post("/api/option", addOption);
app.put("/api/option/:id", saveOption);
app.get("/api/list", getList);
app.delete("/api/list/:id", deleteListItem);
app.post("/seed", seed);
app.get("/api/dinners", getDinners);


const port = process.env.PORT || 4000
 
app.listen(port, () => {console.log(`Listening on port ${port}`)})



// app.listen(4000, () => console.log("Server running on 4000"));