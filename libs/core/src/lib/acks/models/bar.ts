import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Bar {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    bar: Bar;

    @Column({ type: 'uniqueidentifier' })
    barId: string;

}