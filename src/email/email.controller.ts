import { Controller, Get } from '@nestjs/common';
import { EmailService } from './email.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('emails')
@Controller('emails')
export class EmailController {
    constructor(private readonly emailService: EmailService) { }

    @Get('send')
    async sendEmail() {
        const to = "rajpootanubhav8@gmail.com";
        const subject = "testing";
        const text = "it working or not";
        await this.emailService.sendEmail(to, subject, text);
        return { message: 'Email sent successfully' };
    }
}