import { Module } from '@nestjs/common';
import { OrganizacionsService } from './organizacions.service';
import { OrganizacionsController } from './organizacions.controller';
import { Organizacion } from './entities/organizacion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Organizacion])],
  controllers: [OrganizacionsController],
  providers: [OrganizacionsService],
})
export class OrganizacionsModule {}
