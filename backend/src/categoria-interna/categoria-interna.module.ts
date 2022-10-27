import { Module } from '@nestjs/common';
import { CategoriaInternaService } from './categoria-interna.service';
import { CategoriaInternaController } from './categoria-interna.controller';

@Module({
  controllers: [CategoriaInternaController],
  providers: [CategoriaInternaService]
})
export class CategoriaInternaModule {}
