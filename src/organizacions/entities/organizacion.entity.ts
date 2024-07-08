
import { Voluntariado } from "src/voluntariados/entities/voluntariado.entity";
import { Column,  Entity, OneToMany } from "typeorm";

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
    @OneToMany(() => Voluntariado, (voluntariado) => voluntariado.organizacion)
    voluntariados: Voluntariado[];
    
}
