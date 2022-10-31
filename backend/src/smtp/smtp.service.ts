import { Injectable } from '@nestjs/common';
import { CreateSmtpDto } from './dto/create-smtp.dto';
import * as sgMail from '@sendgrid/mail';

@Injectable()
export class SmtpService {
  async sendEmail(createSmtpDto: CreateSmtpDto) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    return await sgMail.send(createSmtpDto).then(() => 
    console.log('Email enviado')).catch((error) => 
    console.log(error));

  }
}
