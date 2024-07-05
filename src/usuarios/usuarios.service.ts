import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { Sector } from 'src/sectors/entities/sector.entity';
import { Ubigeo } from 'src/ubigeos/entities/ubigeo.entity';
import { Voluntariado } from 'src/voluntariados/entities/voluntariado.entity';
import { EntityManager, Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
@Injectable()
export class UsuariosService {
 

  constructor(
    @InjectRepository(Sector)
    private readonly sectorRepository: Repository<Sector>,


    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
   
    @InjectRepository(Ubigeo)
   private readonly ubigeoRepository: Repository<Ubigeo>,
  ){}
 
 /* async create(createUsuarioDto: CreateUsuarioDto) {
    return 'This action adds a new usuario';
  }*/

 
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

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const usuario = new Usuario();
    usuario.nombre = createUsuarioDto.nombre;
    usuario.apellido_paterno = createUsuarioDto.apellido_paterno;
    usuario.apellido_materno = createUsuarioDto.apellido_materno;
    usuario.correo = createUsuarioDto.correo;
    usuario.contrasena = createUsuarioDto.contrasena;
    usuario.tipo_usuario = createUsuarioDto.tipo_usuario;
    usuario.idUbigeo = createUsuarioDto.idUbigeo;
  
    // Mapear el arreglo de sectores a un arreglo de entidades Sector
    const sectors = await this.sectorRepository.findByIds(createUsuarioDto.sectors);
    usuario.sectors = sectors;
  
    // TypeORM se encargará de insertar los registros en la tabla intermedia automáticamente
    return await this.usuarioRepository.save(usuario);
  }


}

