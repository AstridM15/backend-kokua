import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sector } from 'src/sectors/entities/sector.entity';
import { Ubigeo } from 'src/ubigeos/entities/ubigeo.entity';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
@Injectable()
export class UsuariosService {
 

  constructor(


    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
   
    @InjectRepository(Ubigeo)
   private readonly ubigeoRepository: Repository<Ubigeo>,
   
  ){}
 
  async create(createUsuarioDto: CreateUsuarioDto) {
    return 'This action adds a new usuario';
  }

 
  async  findAll() {
    return await this.usuarioRepository.find() ;
  }

  

  async  findOne(id: number) {
    return await `This action returns a #${id} usuario`;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return await `This action updates a #${id} usuario`;
  }
  
  async  remove(id: number) {
    return await `This action removes a #${id} usuario`;
  
  }

  async getSectoresByUsuario(id: number): Promise<Sector[]> {
    const usuario = await this.usuarioRepository.find({
      where: { idUsuario: id } ,
      relations: ['sectors'],
    });
    return usuario[0].sectors;
  }

}
