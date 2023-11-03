import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from 'src/auth/auth.module';
import { PostModule } from 'src/post/post.module';
import { SettingModule } from 'src/setting/setting.module';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', '..', 'static'),
            serveRoot: '/static'
        }),
        AuthModule,
        PostModule,
        SettingModule,
        UserModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
