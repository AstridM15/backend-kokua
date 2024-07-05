import { Module } from '@nestjs/common';
import { UsuariovoluntariadosService } from './usuariovoluntariados.service';
import { UsuariovoluntariadosController } from './usuariovoluntariados.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { Usuariovoluntariado } from './entities/usuariovoluntariado.entity';
import { VoluntariadosModule } from 'src/voluntariados/voluntariados.module';

@Module({
  imports:[TypeOrmModule.forFeature([Usuariovoluntariado]), UsuariosModule, VoluntariadosModule],
  controllers: [UsuariovoluntariadosController],
  providers: [UsuariovoluntariadosService],
  exports:[TypeOrmModule]
})
export class UsuariovoluntariadosModule {}
