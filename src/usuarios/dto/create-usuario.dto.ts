import { FindOperator } from "typeorm";

export class CreateUsuarioDto {

    idUsuario:number;

    nombre: string;

  
    apellido_paterno: string;
    
    apellido_materno: string;
    
    correo: string;
    
    contrasena: string;
  
    tipo_usuario: number;
    idUbigeo?: number;
}
