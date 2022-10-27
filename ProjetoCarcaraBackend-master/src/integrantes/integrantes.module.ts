import { Module } from '@nestjs/common';
import { IntegrantesService } from './integrantes.service';
import { IntegrantesController } from './integrantes.controller';

@Module({
  controllers: [IntegrantesController],
  providers: [IntegrantesService]
})
export class IntegrantesModule {}
