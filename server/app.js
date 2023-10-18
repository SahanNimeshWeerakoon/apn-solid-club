const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.post('/login', (req, res) => {
    return res.json({ status: true });
});

app.post('/register', (req, res) => {
    return res.json({ status: true });
});

app.post('/findTechRegister', (req, res) => {
    return res.json({ status: false });
});

app.post('/technicianRegister', (req, res) => {
    return res.json({ status: true });
});

app.post('/forgotPassword', (req, res) => {
    return res.json({ status: true });
});

app.listen(5000, () => {console.log("node app listing to port 5000")});