import { Controller, Get } from '@nestjs/common';
import { SuperheroService } from './superhero.service';

@Controller()
export class SuperheroController {
    constructor(private readonly superheroService: SuperheroService) { }

  @Get()
  get() {
      return this.superheroService.findAll();
  }
}
