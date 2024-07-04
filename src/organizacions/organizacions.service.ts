import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrganizacionDto } from './dto/create-organizacion.dto';
import { UpdateOrganizacionDto } from './dto/update-organizacion.dto';
import { Organizacion } from './entities/organizacion.entity';

@Injectable()
export class OrganizacionsService {

  constructor(
    @InjectRepository(Organizacion)
      private readonly organizacionRepository: Repository<Organizacion>,
  ){}

  /*async  create(createOrganizacionDto: CreateOrganizacionDto) {
    return 'This action adds a new organizacion';
  }*/
  async create(createOrganizacionDto: CreateOrganizacionDto) {
    const organizacion = new Organizacion();
    organizacion.nombre_org = createOrganizacionDto.nombre_org;
    organizacion.correo = createOrganizacionDto.correo;
    organizacion.descripcion = createOrganizacionDto.descripcion;
    organizacion.imagen_url = createOrganizacionDto.imagen_url;
    organizacion.hora_atencion = createOrganizacionDto.hora_atencion;
    organizacion.contacto = createOrganizacionDto.contacto;
    organizacion.tipo_usuario = createOrganizacionDto.tipo_usuario;
    organizacion.contrasena = createOrganizacionDto.contrasena;
  
    try {
      await this.organizacionRepository.save(organizacion);
      return organizacion;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Error al crear la organización');
    }
  }

  async  findAll() {
    return await this.organizacionRepository.find(); 
  }

  async findOne(id: number) {
    return await this.organizacionRepository.findOne({ where: { idOrganizacion: id } });
  }
  async  update(id: number, updateOrganizacionDto: UpdateOrganizacionDto) {
    return `This action updates a #${id} organizacion`;
  }

  async  remove(id: number) {
    return `This action removes a #${id} organizacion`;
  }
}
