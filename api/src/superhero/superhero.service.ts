import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Superhero } from './entities/superhero.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SuperheroService {
    constructor(
        @InjectRepository(Superhero)
        private superheroRepository: Repository<Superhero>,
    ) { }

    findAll(): Promise<Superhero[]> {
        return this.superheroRepository.find({
            order: {
                humility: "DESC",
            }
        });
    }

    create(createSuperheroDto: CreateSuperheroDto): Promise<Superhero> {
        return this.superheroRepository.create([createSuperheroDto])
    }
}
