import { Controller, Get } from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

@Controller()
export class SuperheroController {
    constructor(private readonly superheroService: SuperheroService) { }

    @Get()
    get() {
        return this.superheroService.findAll();
    }

    @Post()
    create(@Body() createSuperheroDto: CreateSuperheroDto) {
        return this.superheroService.create(createSuperheroDto)
    }
}
