import { NestFactory } from '@nestjs/core';
import { AppMOdule } from 'app.module';
import cookiepParser = require('cookie-parser');

async function bootstrap() {
  const app = await NestFactory.create(AppMOdule);
  app.use(cookiepParser());
  await app.listen(3000);
}
bootstrap();
