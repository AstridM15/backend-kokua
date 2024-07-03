
import { Usuario } from "src/usuarios/entities/usuario.entity";
import { Voluntariado } from "src/voluntariados/entities/voluntariado.entity";
import { Column,  Entity, JoinTable, ManyToMany, OneToMany } from "typeorm";
@Entity()
export class Sector {
    @Column({primary: true, generated: true})
    idSector:number;
    @Column()
    nombre: string;

   @OneToMany(() => Voluntariado, (voluntariado) => voluntariado.sector)
    voluntariados: Voluntariado[];
/*
    @ManyToMany(() => Usuario, (usuario) => usuario.sectors)
    @JoinTable({
        name: 'usuariosector',
        joinColumn: {
            name: 'idSector',
            referencedColumnName: 'idSector'
        },
        inverseJoinColumn: {
            name: 'idUsuario',
            referencedColumnName: 'idUsuario'
        }
    })
    usuarios: Usuario[];*/
    @ManyToMany(() => Usuario, (usuario) => usuario.idUsuario, {
        cascade: true,
      })
      usuarios: Usuario[];
}
