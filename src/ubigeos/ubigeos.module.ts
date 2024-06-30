import { Module } from '@nestjs/common';
import { UbigeosService } from './ubigeos.service';
import { UbigeosController } from './ubigeos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ubigeo } from './entities/ubigeo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ubigeo])],
  controllers: [UbigeosController],
  providers: [UbigeosService],
})
export class UbigeosModule {}
