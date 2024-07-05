import { Usuario } from "src/usuarios/entities/usuario.entity";
import { Voluntariado } from "src/voluntariados/entities/voluntariado.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class Usuariovoluntariado {
    @Column({primary:true, generated:true})
    id:number;
    @Column()
    idUsuario:number;

    @ManyToOne(() => Usuario, (usuario) => usuario.idUsuario)
    @JoinColumn({ name: 'idUsuario' })
    usuario: Usuario;
    @Column()
    idVoluntariado:number;
    @ManyToOne(() => Voluntariado, (voluntariado) => voluntariado.idVoluntariado)
    @JoinColumn({ name: 'idVoluntariado' })
    voluntariado: Voluntariado;

    @Column()
    doc_identidad:number;

    @Column()
    telefono:number;

    @Column()
    correo:string;

    @Column()
    tipo_relacion:number;


}
