const express = require("express");

const router = express.Router();

const {
    sendNotification,
} = require("../services/notification.service");

router.post("/", async (req, res) => {
    try {
        const { user, email, message } = req.body;

        if (!user || !email || !message) {
            return res.status(400).json({
                error: "user, email and message are required",
            });
        }

        const result = await sendNotification({
            user,
            email,
            message,
        });

        res.status(200).json(result);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Internal Server Error",
        });
    }
});

module.exports = router;