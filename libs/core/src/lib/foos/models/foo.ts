import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Foo {

    @PrimaryGeneratedColumn('uuid')
    id: string;

}