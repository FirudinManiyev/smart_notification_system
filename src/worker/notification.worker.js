require("dotenv").config();

const { connectRedis, client } = require("../services/redis.service");
const { getFromQueue } = require("../services/queue.service");
const formatMessage = require("../utils/formatMessage");

async function startWorker() {
  await connectRedis();

  console.log("👷 Notification Worker Started...");

  while (true) {
    try {
      const notification = await getFromQueue();

      if (!notification) {
        continue;
      }

      const { user, email, message } = notification;

      console.log(formatMessage(user, message));

      await client.set(
        `last_notification:${email}`,
        JSON.stringify(notification)
      );
    } catch (error) {
      console.error("Worker Error:", error);
    }
  }
}

startWorker();