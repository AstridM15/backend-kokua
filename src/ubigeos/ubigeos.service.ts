import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { report } from 'process';
import { Repository } from 'typeorm';
import { CreateUbigeoDto } from './dto/create-ubigeo.dto';
import { UpdateUbigeoDto } from './dto/update-ubigeo.dto';
import { Ubigeo } from './entities/ubigeo.entity';

@Injectable()
export class UbigeosService {
  constructor(
    @InjectRepository(Ubigeo)
      private readonly ubigeoRepository: Repository<Ubigeo>
  ){}
  async create(createUbigeoDto: CreateUbigeoDto) {
    return 'This action adds a new ubigeo';
  }

  async findAll() {
    return await this.ubigeoRepository.find(); 
  }

  async findOne(id: number) {
    return `This action returns a #${id} ubigeo`;
  }

  async  update(id: number, updateUbigeoDto: UpdateUbigeoDto) {
    return `This action updates a #${id} ubigeo`;
  }

  async remove(id: number) {
    return `This action removes a #${id} ubigeo`;
  }
}
