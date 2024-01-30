import { kafka } from "./client";

async function init() {
  const admin = kafka.admin();

  console.log("admin connecting !!");

  admin.connect();

  console.log("admin connection success !!");
  console.log("creating Topic !!");

  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });

  console.log("topic created Successfully  !!");

  await admin.disconnect();

  console.log("disconnecting admin !!");
}

init();
