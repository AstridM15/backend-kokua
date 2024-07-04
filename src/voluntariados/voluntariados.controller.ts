import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VoluntariadosService } from './voluntariados.service';
import { CreateVoluntariadoDto } from './dto/create-voluntariado.dto';
import { UpdateVoluntariadoDto } from './dto/update-voluntariado.dto';

@Controller('voluntariados')
export class VoluntariadosController {
  constructor(private readonly voluntariadosService: VoluntariadosService) {}

  @Post()
  create(@Body() createVoluntariadoDto: CreateVoluntariadoDto) {
    return this.voluntariadosService.create(createVoluntariadoDto);
  }

  @Get()
  findAll() {
    return this.voluntariadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.voluntariadosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateVoluntariadoDto: UpdateVoluntariadoDto) {
    return this.voluntariadosService.update(id, updateVoluntariadoDto);
  }
  @Get('organizacion/:idOrganizacion')
  findVoluntariadosByOrganizacionId(@Param('idOrganizacion') idOrganizacion: number) {
    return this.voluntariadosService.findVoluntariadosByOrganizacionId(idOrganizacion);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.voluntariadosService.remove(id);
  }

  @Get(':id/sector')
  getSectorName(@Param('id') id: number) {
    return this.voluntariadosService.getSectorName(id);
  }
}
