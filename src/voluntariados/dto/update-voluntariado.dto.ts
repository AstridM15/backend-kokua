import { PartialType } from '@nestjs/mapped-types';
import { CreateVoluntariadoDto } from './create-voluntariado.dto';

export class UpdateVoluntariadoDto extends PartialType(CreateVoluntariadoDto) {}
