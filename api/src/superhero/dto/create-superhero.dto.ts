import { IsNumber, IsString } from 'class-validator'

export class CreateSuperheroDto {
  @IsString()
  name: string

  @IsString()
  power: string

  @IsNumber()
  humility: number
}
