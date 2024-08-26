import {Ctx, Hears, Update} from 'nestjs-puregram';
import {Injectable} from '@nestjs/common';
import {TelegramContextModel} from './model/telegram-context-model';

@Update()
@Injectable()
export class TelegramBotController {
    @Hears('/start')
    async start(@Ctx() telegramContext: TelegramContextModel): Promise<void> {
        const keyboard = []
        await telegramContext.send('Привет', {
            reply_markup: {
                resize_keyboard: true,
                remove_keyboard: true,
                keyboard: [
                    [{
                        text: 'казино ебаное',
                        web_app: {
                            url : 'https://strd-ircp21.com/c8da10ffa?ctag=%7Bclickid%7D&btag=%7Bsub2%7D'
                        }
                    }],
                ],
            },
        })
    }
}
