
import { Sector } from "src/sectors/entities/sector.entity";
import { Ubigeo} from "src/ubigeos/entities/ubigeo.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne } from "typeorm";

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
    sectors: Sector[];
}
