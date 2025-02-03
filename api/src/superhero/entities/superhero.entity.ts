import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Superhero {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    power: string;

    @Column()
    humility: number;
}