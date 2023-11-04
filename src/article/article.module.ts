import { Module } from '@nestjs/common';
import { ArticleController } from './controllers/article.controller';
import { ArticleService } from './providers/article.service';

@Module({
    controllers: [ArticleController],
    providers: [ArticleService],
})
export class ArticleModule {}
