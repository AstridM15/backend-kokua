import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UbigeosService } from './ubigeos.service';
import { CreateUbigeoDto } from './dto/create-ubigeo.dto';
import { UpdateUbigeoDto } from './dto/update-ubigeo.dto';

@Controller('ubigeos')
export class UbigeosController {
  constructor(private readonly ubigeosService: UbigeosService) {}

  @Post()
  create(@Body() createUbigeoDto: CreateUbigeoDto) {
    return this.ubigeosService.create(createUbigeoDto);
  }

  @Get()
  findAll() {
    return this.ubigeosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.ubigeosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUbigeoDto: UpdateUbigeoDto) {
    return this.ubigeosService.update(id, updateUbigeoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.ubigeosService.remove(id);
  }
}
