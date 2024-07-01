import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { Usuario } from './entities/usuario.entity';
import { UbigeosModule } from 'src/ubigeos/ubigeos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UbigeosService } from 'src/ubigeos/ubigeos.service';
import { Ubigeo } from 'src/ubigeos/entities/ubigeo.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Usuario]) , UbigeosModule],

  controllers: [UsuariosController],
  providers: [UsuariosService, UbigeosService],
})
export class UsuariosModule {}
