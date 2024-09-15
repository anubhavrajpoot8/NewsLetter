import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { config } from '@zpaisa/config';

@Module({
    imports: [
        MailerModule.forRootAsync({
            useFactory: async () => ({
                transport: {
                    host: config.mail_host,
                    port: 587,
                    secure: false,
                    auth: {
                        user: config.mail_user,
                        pass: config.mail_password,
                    },
                },
                defaults: {
                    from: `"No Reply" <no-reply@zasset.com>`,
                },
                // template: {
                //     dir: join(__dirname, './templates'),
                //     adapter: new HandlebarsAdapter(),
                //     options: {
                //         strict: true,
                //     },
                // },
            }),
            // inject: [ConfigService],
        }),
    ],
    controllers: [EmailController],
    providers: [EmailService],
    exports: [EmailService],
})
export class EmailModule { }