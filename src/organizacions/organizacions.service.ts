import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrganizacionDto } from './dto/create-organizacion.dto';
import { UpdateOrganizacionDto } from './dto/update-organizacion.dto';
import { Organizacion } from './entities/organizacion.entity';

@Injectable()
export class OrganizacionsService {

  constructor(
    @InjectRepository(Organizacion)
      private readonly organizacionRepository: Repository<Organizacion>
  ){}

  async  create(createOrganizacionDto: CreateOrganizacionDto) {
    return 'This action adds a new organizacion';
  }

  async  findAll() {
    return await this.organizacionRepository.find(); 
  }

  async  findOne(id: number) {
    return `This action returns a #${id} organizacion`;
  }

  async  update(id: number, updateOrganizacionDto: UpdateOrganizacionDto) {
    return `This action updates a #${id} organizacion`;
  }

  async  remove(id: number) {
    return `This action removes a #${id} organizacion`;
  }
}
