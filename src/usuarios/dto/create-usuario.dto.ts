import { IsInt, IsString } from "class-validator";



export class CreateUsuarioDto {
    @IsString()
    nombre: string;
    @IsString()
    apellido_paterno: string;
    
    @IsString()
    apellido_materno: string;
    @IsString()
    correo: string;
    @IsString()
    contrasena: string;
    @IsInt()
    tipo_usuario: number;
    @IsInt()
    idUbigeo?: number;
}
