const client = require("../../redis/redisClient");

async function connectRedis() {
  if (!client.isOpen) {
    await client.connect();
    console.log("✅ Redis Connected");
  }
}

async function setCache(key, value) {
  await client.set(key, JSON.stringify(value));
}

async function getCache(key) {
  const value = await client.get(key);

  return value ? JSON.parse(value) : null;
}

module.exports = {
  client,
  connectRedis,
  setCache,
  getCache,
};