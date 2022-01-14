import { Entity, PrimaryGeneratedColumn } from "typeorm";

import { Bar } from "./bar";

@Entity()
export class Ack {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    bars: Bar[];

}