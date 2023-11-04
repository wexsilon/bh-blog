import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from '../providers/app.service';
import { Response } from 'express';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    homeGet(@Res() res: Response) {
        res.render('index.pug', {});
    }
}
