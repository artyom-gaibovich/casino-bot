import { Module } from '@nestjs/common';
import { TelegramBotController } from './telegram-bot.controller';

@Module({
	imports: [
	],
	providers: [TelegramBotController],
})
export class TelegramBotModule {}
