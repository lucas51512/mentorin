import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { cors } from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.setGlobalPrefix("api/v1");
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(8080);
}
bootstrap();
