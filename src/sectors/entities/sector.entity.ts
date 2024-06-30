import { Column,  Entity } from "typeorm";
@Entity()
export class Sector {
    @Column({primary: true, generated: true})
    idSector:number;
    @Column()
    nombre: string;
}
