import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuariovoluntariadoDto } from './create-usuariovoluntariado.dto';

export class UpdateUsuariovoluntariadoDto extends PartialType(CreateUsuariovoluntariadoDto) {}
