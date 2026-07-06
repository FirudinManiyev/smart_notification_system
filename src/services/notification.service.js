const { addToQueue } = require("./queue.service");

async function sendNotification(notification) {
    await addToQueue(notification);

    return {
        status: "queued",
    };
}

module.exports = {
    sendNotification,
};