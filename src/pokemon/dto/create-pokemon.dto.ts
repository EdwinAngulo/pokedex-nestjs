import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreatePokemonDto {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @Min(1)
  readonly no: number;
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  readonly name: string;
}
