import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Superhero {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  power: string

  @Column()
  humility: number
}
