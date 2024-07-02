import { Module } from '@nestjs/common';
import { SectorsService } from './sectors.service';
import { SectorsController } from './sectors.controller';
import { Sector } from './entities/sector.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sector,Usuario])],
  controllers: [SectorsController],
  providers: [SectorsService],
  exports: [TypeOrmModule],
})
export class SectorsModule {}
