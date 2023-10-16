const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.post('/login', (req, res) => {
    res.json({ status: true });
});

app.post('/register', (req, res) => {
    res.json({ status: true });
});

app.post('/findTechRegister', (req, res) => {
    res.json({ status: true });
});

app.post('/technicianRegister', (req, res) => {
    res.json({ status: true });
});

app.listen(5000, () => {console.log("node app listing to port 5000")});