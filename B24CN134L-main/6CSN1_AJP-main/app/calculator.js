const express = require("express");

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: "Hello from Express REST API"
    });
});

app.get('/about', (req,res) => {
    res.json({
        message: "This is About Us Page "
    });
});

app.get('/add/:a/:b', (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    res.json({ result: a+b});
});

app.get('/subtract/:a/:b', (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    res.json({ result: a-b});
});

app.get('/multi/:a/:b', (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    res.json({ result: a*b});
});

app.get('/divide/:a/:b', (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    res.json({ result: a/b});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`EXpress REST API running on http://localhost:${PORT}`);
});


