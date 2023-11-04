import { Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('setting')
export class SettingController {
    @Get()
    settingGet(@Res() res: Response) {
        res.render('setting/setting-page', {});
    }
    @Post()
    settingPost() {}
}
