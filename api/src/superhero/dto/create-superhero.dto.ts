import { IsNumber, IsString } from 'class-validator'

export class CreateSuperheroDto {
  @IsString()
  name: string

  @IsString()
  superpower: string

  @IsNumber()
  humility: number
}
