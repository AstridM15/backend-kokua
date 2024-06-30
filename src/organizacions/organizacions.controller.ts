import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrganizacionsService } from './organizacions.service';
import { CreateOrganizacionDto } from './dto/create-organizacion.dto';
import { UpdateOrganizacionDto } from './dto/update-organizacion.dto';

@Controller('organizacions')
export class OrganizacionsController {
  constructor(private readonly organizacionsService: OrganizacionsService) {}

  @Post()
  create(@Body() createOrganizacionDto: CreateOrganizacionDto) {
    return this.organizacionsService.create(createOrganizacionDto);
  }

  @Get()
  findAll() {
    return this.organizacionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.organizacionsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateOrganizacionDto: UpdateOrganizacionDto) {
    return this.organizacionsService.update(id, updateOrganizacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.organizacionsService.remove(id);
  }
}
