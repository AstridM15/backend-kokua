import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Repository } from 'typeorm';
import { CreateSectorDto } from './dto/create-sector.dto';
import { UpdateSectorDto } from './dto/update-sector.dto';
import { Sector } from './entities/sector.entity';
@Injectable()
export class SectorsService {
  constructor(
    @InjectRepository(Sector)
      private readonly sectorRepository: Repository<Sector>
  ){}
  async create(createSectorDto: CreateSectorDto) {
    return 'This action adds a new sector';
  }

  async  findAll() {
    return await this.sectorRepository.find(); 
  }

  async findOne(id: number) {
    return `This action returns a #${id} sector`;
  }

  async update(id: number, updateSectorDto: UpdateSectorDto) {
    return `This action updates a #${id} sector`;
  }

  async  remove(id: number) {
    return `This action removes a #${id} sector`;
  }

  async getUsuariosBySector(id: number): Promise<Usuario[]> {
    const sector = await this.sectorRepository.findOne({
      where: { idSector: id },
      relations: ['usuarios'],
    });
    return sector ? sector.usuarios : [];
  }
}
