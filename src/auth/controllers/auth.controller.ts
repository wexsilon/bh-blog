import { Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    @Get('login')
    loginGet(@Res() res: Response) {
        res.render('auth/login', {});
    }
    @Post('login')
    loginPost() {}

    @Get('register')
    registerGet(@Res() res: Response) {
        res.render('auth/register', {});
    }
    @Post('register')
    registerPost() {}

    @Get('logout')
    logoutGet() {}
}
