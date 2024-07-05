import { IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateUsuariovoluntariadoDto {
  @IsNumber()
  idUsuario: number;

  @IsNumber()
  idVoluntariado: number;
 
  @IsOptional()
  @IsNumber()
  doc_identidad: number;
  @IsOptional()
  @IsNumber()
  telefono: number;
  @IsOptional()
  @IsString()
  correo: string;

  @IsNumber()
  tipo_relacion: number;
}