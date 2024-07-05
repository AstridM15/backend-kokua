import { Organizacion } from "src/organizacions/entities/organizacion.entity";
import { Sector } from "src/sectors/entities/sector.entity";
import { Ubigeo } from "src/ubigeos/entities/ubigeo.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, ViewColumn } from "typeorm";
import * as moment from 'moment';
import { Usuario } from "src/usuarios/entities/usuario.entity";
@Entity()
export class Voluntariado {
    @Column({primary:true, generated:true})
    idVoluntariado:number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;
    @Column()
    requisitos: string;
    @Column()
    frase_motivadora: string;
    @Column()
    imagen_url: string;
    @Column()
    fecha_limite: Date;
    @Column()
    fecha_inicio: Date;
    @Column()
    direccion: string;
   
    @Column()
    fecha_final: Date;

    @Column()
    idUbigeo: number;
    @ManyToOne(() => Ubigeo, (ubigeo) => ubigeo.idUbigeo)
    @JoinColumn({ name: 'idUbigeo' })
    ubigeo: Ubigeo;
    @Column()
    idOrganizacion: number;

    @ManyToOne(() => Organizacion, (organizacion) => organizacion.idOrganizacion)
    @JoinColumn({ name: 'idOrganizacion' })
    organizacion: Organizacion;

    @Column()
    idSector: number;
    @ManyToOne(() => Sector, (sector) => sector.idSector)
    @JoinColumn({ name: 'idSector' })
    sector: Sector;

    @ManyToMany(() => Usuario, (usuario) => usuario.idUsuario, {
        cascade: true,
      })
      usuarios: Usuario[];


      

}
