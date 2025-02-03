import { IsNumber, IsString, Max, Min } from 'class-validator'

export class CreateSuperheroDto {
  @IsString()
  name: string

  @IsString()
  power: string

  @IsNumber()
  @Max(10)
  @Min(1)
  humility: number
}
