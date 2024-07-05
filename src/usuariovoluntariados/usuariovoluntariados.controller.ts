import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariovoluntariadosService } from './usuariovoluntariados.service';
import { CreateUsuariovoluntariadoDto } from './dto/create-usuariovoluntariado.dto';
import { UpdateUsuariovoluntariadoDto } from './dto/update-usuariovoluntariado.dto';

@Controller('usuariovoluntariados')
export class UsuariovoluntariadosController {
  constructor(private readonly usuariovoluntariadosService: UsuariovoluntariadosService) {}

  @Post()
  create(@Body() createUsuariovoluntariadoDto: CreateUsuariovoluntariadoDto) {
    return this.usuariovoluntariadosService.create(createUsuariovoluntariadoDto);
  }

  @Get()
  findAll() {
    return this.usuariovoluntariadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usuariovoluntariadosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUsuariovoluntariadoDto: UpdateUsuariovoluntariadoDto) {
    return this.usuariovoluntariadosService.update(id, updateUsuariovoluntariadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usuariovoluntariadosService.remove(id);
  }

  @Delete(':idVoluntariado/usuario/:idUsuario/tiporelacion/:tipo_relacion')
async removeByVoluntariadoAndUsuario(
  @Param('idVoluntariado') idVoluntariado: number,
  @Param('idUsuario') idUsuario: number,
  @Param('tipo_relacion') tipo_relacion: number,
) {
  return await this.usuariovoluntariadosService.removeByVoluntariadoAndUsuario(idVoluntariado, idUsuario, tipo_relacion);
}
  
}
