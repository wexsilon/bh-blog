import { Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('post')
export class PostController {

    @Get('create')
    createGet(@Res() res: Response) {
        res.render('post/new-post')
    }
    @Post('create')
    createPost() {
        
    }


    @Get(':id')
    singlePost(@Res() res: Response) {
        res.render('post/post-page', {  });
    }
}
