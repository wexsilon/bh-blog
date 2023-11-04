import { Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('article')
export class ArticleController {
    @Get('create')
    createArticleGet(@Res() res: Response) {
        res.render('article/new-article');
    }
    @Post('create')
    createArticle() {}

    @Get(':id')
    singleArticleGet(@Res() res: Response) {
        res.render('article/article-page', {});
    }
}
