import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Superhero {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  power: string

  @Column('numeric', { precision: 10, scale: 2 })
  humility: number
}
