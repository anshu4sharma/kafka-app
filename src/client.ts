import { Kafka } from "kafkajs";

export const kafka = new Kafka({
  clientId: "anshu-app",
  brokers: ["192.168.1.10:9092"],
});
