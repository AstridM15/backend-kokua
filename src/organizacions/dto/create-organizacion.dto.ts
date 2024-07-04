import { IsInt, IsString } from "class-validator";

export class CreateOrganizacionDto {
    @IsString()
    nombre_org: string;

    @IsString()
    correo: string;
    @IsString()
    descripcion: string;
    @IsString()
    imagen_url: string;

    @IsString()
    hora_atencion: string;
    @IsString()
    contacto: string;
    @IsInt()
    tipo_usuario: number;
    @IsString()
    contrasena: string;

}
/*import { IsArray, IsInt, IsString } from "class-validator";



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
    @IsArray()
    @IsInt({ each: true })
    sectors: number[];
} */