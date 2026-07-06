require("dotenv").config();

const express = require("express");

const { connectRedis } = require("./services/redis.service");
const notifyRoutes = require("./routes/notify.routes");

const app = express();

app.use(express.json());

app.use("/notify", notifyRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Smart Notification System API",
    });
});

const PORT = process.env.PORT || 3000;

async function startServer() {
    await connectRedis();

    app.listen(PORT, () => {
        console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
}

startServer();

module.exports = app;