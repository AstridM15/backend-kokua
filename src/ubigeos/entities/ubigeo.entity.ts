import { Usuario } from "src/usuarios/entities/usuario.entity";
import { Voluntariado } from "src/voluntariados/entities/voluntariado.entity";

import { Column, DeleteDateColumn, Entity, OneToMany } from "typeorm";

@Entity()
export class Ubigeo {
    @Column({primary: true, generated: true})
    idUbigeo:number;
    @Column()
    departamento: string;
    @Column()
    provincia: string;
    @Column()
    distrito: string;
    @OneToMany(() => Usuario, (usuario) => usuario.ubigeo)
    usuarios: Usuario[];
    @OneToMany(() => Voluntariado, (voluntariado) => voluntariado.ubigeo)
    voluntariados: Voluntariado[];
}
