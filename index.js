const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

app.get("/users", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Hamza"
        },
        {
            id: 2,
            name: "Ahmad"
        }
    ]);
});


app.post("/users", (req, res) => {
    const user = req.body;

    res.json({
        message: "User received",
        user: user
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});