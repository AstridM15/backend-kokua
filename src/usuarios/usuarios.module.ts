import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { Usuario } from './entities/usuario.entity';
import { UbigeosModule } from 'src/ubigeos/ubigeos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UbigeosService } from 'src/ubigeos/ubigeos.service';
import { Ubigeo } from 'src/ubigeos/entities/ubigeo.entity';
import { SectorsModule } from 'src/sectors/sectors.module';
import { Sector } from 'src/sectors/entities/sector.entity';
import { Voluntariado } from 'src/voluntariados/entities/voluntariado.entity';


@Module({
  imports:[TypeOrmModule.forFeature([Usuario, Sector, Voluntariado]), UbigeosModule],

  controllers: [UsuariosController],
  providers: [UsuariosService, UbigeosService],
  exports:[TypeOrmModule]
})
export class UsuariosModule {}
