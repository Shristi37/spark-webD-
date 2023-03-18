const express = require("express");
const app = express();
const Razorpay = require("razorpay");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    // res.sendFile(__dirname + "/index.html");
    res.send("hello");
});

app.post("/payment", async (req, res) => {
    let { amount } = req.body;
    var instance = new Razorpay({ key_id: 'rzp_test_bD7F6gg3OsyeQ2', key_secret: 'c63hQP8mApLSRsK3LNIf84Fo' })

    let order = await instance.orders.create({
        amount: amount * 100,
        currency: "INR",
        receipt: "receipt#1",

    })
    res.status(201).json({
        success: true,
        order,
        amount,
    });
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
})