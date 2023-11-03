import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import morgan from 'morgan';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.use(morgan('dev'))
    app.enableCors();
    app.setBaseViewsDir(join(__dirname, '..', 'views'));
    app.setViewEngine('pug');

    await app.listen(3000);
}
bootstrap();
