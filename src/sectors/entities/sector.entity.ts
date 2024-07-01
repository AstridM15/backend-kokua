
import { Voluntariado } from "src/voluntariados/entities/voluntariado.entity";
import { Column,  Entity, OneToMany } from "typeorm";
@Entity()
export class Sector {
    @Column({primary: true, generated: true})
    idSector:number;
    @Column()
    nombre: string;

   @OneToMany(() => Voluntariado, (voluntariado) => voluntariado.sector)
    voluntariados: Voluntariado[];
}
