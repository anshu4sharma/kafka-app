# Node or Express Js App with typescript

## Commands

- Start Zookeper Container and expose PORT `2181`.

```bash
docker run -p 2181:2181 zookeeper
```

- Start Kafka Container, expose PORT `9092` and setup ENV variables.

```bash
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```

## I had used my own ip here !!

```bash
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=192.168.1.10:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.1.10:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```

## Steps to run this programme 

1 : index.ts will create a topic ( npm run admin )

2 : producer.ts will run producer ( npm run producer )

3 : consumer.ts will run consumer ( npm run consumer )
# kafka-app

## Using Docker compose 

```bash

export HOST_IP=$(ifconfig | grep -E "([0-9]{1,3}\.){3}[0-9]{1,3}" | grep -v 127.0.0.1 | awk '{ print $2 }' | cut -f2 -d: | head -n1)

docker-compose up
```