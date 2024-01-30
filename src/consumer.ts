import { kafka } from "./client";

async function init() {
  const consumer = kafka.consumer({ groupId: "user-1" });
  await consumer.connect();
  console.log("consumer connected !!");
  await consumer.subscribe({ topics: ["rider-updates"], fromBeginning: true });
  console.log("subscibed to rider updates");
  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log(`Topic: ${topic} Parition: ${partition} ${message.value}`);
    },
  });
  // don't disconnect ! it will stop listening !! 
  // await consumer.disconnect();
  // console.log("disconnected consumer !!");
}

init();
