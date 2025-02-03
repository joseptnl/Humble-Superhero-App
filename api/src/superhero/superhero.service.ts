import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Superhero } from './entities/superhero.entity'
import { Repository } from 'typeorm'
import { CreateSuperheroDto } from './dto/create-superhero.dto'
import { v4 } from 'uuid'

@Injectable()
export class SuperheroService {
  constructor(
    @InjectRepository(Superhero)
    private superheroRepository: Repository<Superhero>
  ) {}

  /**
   * Finds all existing superheroes.
   */
  findAll(): Promise<Superhero[]> {
    return this.superheroRepository.find({
      order: {
        humility: 'DESC',
      },
    })
  }

  /**
   * Create a superhero.
   *
   * @param createSuperheroDto
   */
  create(createSuperheroDto: CreateSuperheroDto): Superhero {
    const [superhero] = this.superheroRepository.create([{ ...createSuperheroDto, id: v4() }])
    return superhero
  }
}
