import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Voluntariado } from 'src/voluntariados/entities/voluntariado.entity';
import { Equal, Repository } from 'typeorm';
import { CreateUsuariovoluntariadoDto } from './dto/create-usuariovoluntariado.dto';
import { UpdateUsuariovoluntariadoDto } from './dto/update-usuariovoluntariado.dto';
import { Usuariovoluntariado } from './entities/usuariovoluntariado.entity';

@Injectable()
export class UsuariovoluntariadosService {
  constructor(



    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
   
    @InjectRepository(Voluntariado)
    private readonly voluntariadoRepository: Repository<Voluntariado>,
   
    @InjectRepository(Usuariovoluntariado)
    private readonly usuariovoluntariadoRepository: Repository<Usuariovoluntariado>,
   

  ){}

  async create(createUsuariovoluntariadoDto: CreateUsuariovoluntariadoDto) {
    const usuariovoluntariado = new Usuariovoluntariado();
    usuariovoluntariado.idUsuario = createUsuariovoluntariadoDto.idUsuario;
    usuariovoluntariado.idVoluntariado = createUsuariovoluntariadoDto.idVoluntariado;
    usuariovoluntariado.doc_identidad = createUsuariovoluntariadoDto.doc_identidad;
    usuariovoluntariado.telefono = createUsuariovoluntariadoDto.telefono;
    usuariovoluntariado.correo = createUsuariovoluntariadoDto.correo;
    usuariovoluntariado.tipo_relacion = createUsuariovoluntariadoDto.tipo_relacion;
  // Cargar la relación usuario
  const usuario = await this.usuarioRepository.findOne({ where: { idUsuario: createUsuariovoluntariadoDto.idUsuario } });
  usuariovoluntariado.usuario = usuario;

  // Cargar la relación voluntariado
  const voluntariado = await this.voluntariadoRepository.findOne({ where: { idVoluntariado: createUsuariovoluntariadoDto.idVoluntariado } });
  usuariovoluntariado.voluntariado = voluntariado;

  return await this.usuariovoluntariadoRepository.save(usuariovoluntariado);
  }

  async findAll() {
    return await  this.usuariovoluntariadoRepository.find() ;;
  }

  async  findOne(id: number) {
    return await  `This action returns a #${id} usuariovoluntariado`;
  }

  async update(id: number, updateUsuariovoluntariadoDto: UpdateUsuariovoluntariadoDto) {
    return await  `This action updates a #${id} usuariovoluntariado`;
  }

  async remove(id: number) {
    return await  `This action removes a #${id} usuariovoluntariado`;
  }

  async findIdByVoluntariadoAndUsuario(idVoluntariado: number, idUsuario: number, tipo_relacion: number): Promise<number> {
    const usuariovoluntariado = await this.usuariovoluntariadoRepository.findOne({
      where: {
        idVoluntariado,
        idUsuario,
        tipo_relacion,
      },
    });
  
    if (!usuariovoluntariado) {
      throw new NotFoundException(`No usuariovoluntariado found with idVoluntariado ${idVoluntariado}, idUsuario ${idUsuario} and tipoRelacion ${tipo_relacion}`);
    }
  
    return usuariovoluntariado.id;
  }
  
  async removeByVoluntariadoAndUsuario(idVoluntariado: number, idUsuario: number, tipo_relacion: number) {
    const id = await this.findIdByVoluntariadoAndUsuario(idVoluntariado, idUsuario, tipo_relacion);
    return await this.usuariovoluntariadoRepository.delete(id);
  }
}
