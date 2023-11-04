import { Module } from '@nestjs/common';
import { SettingController } from './controllers/setting.controller';
import { SettingService } from './providers/setting.service';

@Module({
    controllers: [SettingController],
    providers: [SettingService],
})
export class SettingModule {}
