import { Column, DeleteDateColumn, Entity } from "typeorm";

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
 
}
