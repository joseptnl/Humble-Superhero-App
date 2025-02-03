import { OmitType } from '@nestjs/mapped-types';
import { Superhero } from '../entities/superhero.entity';

export class CreateSuperheroDto extends OmitType(Superhero, ['id'] as const) {}