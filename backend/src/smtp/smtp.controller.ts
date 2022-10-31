import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SmtpService } from './smtp.service';
import { CreateSmtpDto } from './dto/create-smtp.dto';

@Controller('smtp')
export class SmtpController {
  constructor(private readonly smtpService: SmtpService) {}

  @Post()
  sendEmail(@Body() createSmtpDto: CreateSmtpDto) {
    return this.smtpService.sendEmail(createSmtpDto);
  }
}
