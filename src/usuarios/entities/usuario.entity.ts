
import { Sector } from "src/sectors/entities/sector.entity";
import { Ubigeo} from "src/ubigeos/entities/ubigeo.entity";
import { Usuariovoluntariado } from "src/usuariovoluntariados/entities/usuariovoluntariado.entity";
import { Voluntariado } from "src/voluntariados/entities/voluntariado.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Usuario {
    @Column({primary:true, generated:true})
    idUsuario:number;

    @Column()
    nombre: string;

    @Column()
    apellido_paterno: string;
    @Column()
    apellido_materno: string;
    @Column()
    correo: string;
    @Column()
    contrasena: string;
    @Column()
    tipo_usuario: number;
    @Column()
    idUbigeo: number;

    @ManyToOne(() => Ubigeo, (ubigeo) => ubigeo.idUbigeo)
    @JoinColumn({ name: 'idUbigeo' })
    ubigeo: Ubigeo;


    @OneToMany(() => Usuariovoluntariado, (usuariovoluntariado) => usuariovoluntariado.usuario)
    usuariovoluntariados: Usuariovoluntariado[];


   /*
    @ManyToMany(() => Sector, (sector) => sector.usuarios)
    @JoinTable({
        name: 'usuariosector',
        joinColumn: {
            name: 'idUsuario',
            referencedColumnName: 'idUsuario'
        },
        inverseJoinColumn: {
            name: 'idSector',
            referencedColumnName: 'idSector'
        }
    })
    sectors: Sector[];*/

  @ManyToMany(() => Sector, (sector) => sector.idSector, {
    cascade: true,
  })
  @JoinTable({
    name: 'usuariosector',
    joinColumn: {
      name: 'idUsuario',
      referencedColumnName: 'idUsuario',
    },
    inverseJoinColumn: {
      name: 'idSector',
      referencedColumnName: 'idSector',
    },
  })
  sectors: Sector[];

}
