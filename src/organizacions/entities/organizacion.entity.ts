import { Column,  Entity } from "typeorm";

@Entity()
export class Organizacion {
    @Column({primary: true, generated: true})
    idOrganizacion:number;
    @Column()
    nombre_org: string;
    @Column()
    correo: string;
    @Column()
    descripcion: string;
    @Column()
    imagen_url: string;
    @Column()
    hora_atencion: string;
    @Column()
    contacto: string;
    @Column()
    tipo_usuario: number;
    @Column()
    contrasena: string;
}
