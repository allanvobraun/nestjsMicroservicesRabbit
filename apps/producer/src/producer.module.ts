import { Module } from "@nestjs/common";
import { ProducerController } from "./producer.controller";
import { ProducerService } from "./producer.service";
import { ConfigModule } from "@nestjs/config";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [ConfigModule.forRoot(), ClientsModule.register([
    {
      name: "VEHICLE_PRODUCER",
      transport: Transport.RMQ,
      options: {
        urls: [`amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}`],
        queue: process.env.RABBITMQ_QUEUE_NAME,
        queueOptions: {
          durable: true
        }
      }
    }
  ])],
  controllers: [ProducerController],
  providers: [ProducerService]
})
export class ProducerModule {
}
