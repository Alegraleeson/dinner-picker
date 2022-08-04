require('dotenv').config()
const express = require("express");
const cors = require("cors");

const app = express();

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





app.listen(4000, () => console.log("Server running on 4000"));