import { Module } from '@nestjs/common';
import { VoluntariadosService } from './voluntariados.service';
import { VoluntariadosController } from './voluntariados.controller';
import { SectorsModule } from 'src/sectors/sectors.module';
import { OrganizacionsModule } from 'src/organizacions/organizacions.module';
import { UbigeosModule } from 'src/ubigeos/ubigeos.module';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UbigeosService } from 'src/ubigeos/ubigeos.service';
import { OrganizacionsService } from 'src/organizacions/organizacions.service';
import { SectorsService } from 'src/sectors/sectors.service';
import { Voluntariado } from './entities/voluntariado.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Voluntariado]) , UbigeosModule, SectorsModule, OrganizacionsModule],
  controllers: [VoluntariadosController],
  providers: [VoluntariadosService, UbigeosService, SectorsService,OrganizacionsService],
  exports: [TypeOrmModule],
})
export class VoluntariadosModule {}
