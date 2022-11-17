import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MailService } from './mail.service';
import { CreateMailDto } from './dto/create-mail.dto';

@Controller('send-mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post()
  sendEmail(@Body() createMailDto: CreateMailDto) {
    return this.mailService.sendEmail(createMailDto);
  }
}
