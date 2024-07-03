import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Organizacion } from 'src/organizacions/entities/organizacion.entity';
import { Sector } from 'src/sectors/entities/sector.entity';
import { Ubigeo } from 'src/ubigeos/entities/ubigeo.entity';
import { Repository } from 'typeorm';
import { CreateVoluntariadoDto } from './dto/create-voluntariado.dto';
import { UpdateVoluntariadoDto } from './dto/update-voluntariado.dto';
import { Voluntariado } from './entities/voluntariado.entity';

@Injectable()
export class VoluntariadosService {

  constructor(
    @InjectRepository(Voluntariado)
    private readonly voluntariadoRepository: Repository<Voluntariado>,
   
    @InjectRepository(Ubigeo)
   private readonly ubigeoRepository: Repository<Ubigeo>,
   
   @InjectRepository(Organizacion)
   private readonly organizacionRepository: Repository<Organizacion>,
   @InjectRepository(Sector)
   private readonly sectorRepository: Repository<Sector>
  
  ){}

 async create(createVoluntariadoDto: CreateVoluntariadoDto) {
    return 'This action adds a new voluntariado';
  }

  async findAll() {
    return await this.voluntariadoRepository.find() ;
  }

  async findOne(id: number) {
    return await this.voluntariadoRepository.findOne({ where: { idVoluntariado: id } });
  }
  async update(id: number, updateVoluntariadoDto: UpdateVoluntariadoDto) {
    return `This action updates a #${id} voluntariado`;
  }

  async remove(id: number) {
    return `This action removes a #${id} voluntariado`;
  }

  async findVoluntariadosByOrganizacionId(idOrganizacion: number): Promise<Voluntariado[]> {
    // Aquí debes implementar la lógica para obtener los voluntariados asociados a la organización con el ID proporcionado
    // Por ejemplo, puedes utilizar un repositorio o una consulta a la base de datos
    return this.voluntariadoRepository.find({
      where: { idOrganizacion: idOrganizacion },
    });
  }
}
