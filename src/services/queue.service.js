const { client } = require("./redis.service");

const QUEUE_NAME = "notification_queue";

async function addToQueue(notification) {
    await client.lPush(QUEUE_NAME, JSON.stringify(notification));
}

async function getFromQueue() {
    const result = await client.brPop(QUEUE_NAME, 0);

    if (!result) return null;

    return JSON.parse(result.element);
}

module.exports = {
    addToQueue,
    getFromQueue,
    QUEUE_NAME,
};