import { Module } from '@nestjs/common';
import { SmtpService } from './smtp.service';
import { SmtpController } from './smtp.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SmtpController],
  providers: [SmtpService, PrismaService]
})
export class SmtpModule {}
