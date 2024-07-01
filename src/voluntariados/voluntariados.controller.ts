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
  findOne(@Param('id') id: string) {
    return this.voluntariadosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVoluntariadoDto: UpdateVoluntariadoDto) {
    return this.voluntariadosService.update(+id, updateVoluntariadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.voluntariadosService.remove(+id);
  }
}
