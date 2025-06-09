import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  try {
    app.connectMicroservice<MicroserviceOptions>({
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6379,
      },
    });

    await app.startAllMicroservices();
    await app.listen(3001);
    console.log(
      'Microservice-B is running on port 3001 and connected to Redis',
    );
  } catch (error) {
    console.error(
      'Failed to connect to Redis or start microservice:',
      error.message,
    );
    process.exit(1); // Exit process if Redis is critical
  }
}

bootstrap();
