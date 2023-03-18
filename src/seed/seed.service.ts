import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FetchAdapter } from 'src/common/adapters/fetch.adapter';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: FetchAdapter,
  ) {}

  async execute() {
    await this.pokemonModel.deleteMany({});
    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=300',
    );
    const pokemonToInsert: { name: string; no: number }[] = [];

    data.results.forEach((pokemon) => {
      const no = +pokemon.url.split('/')[6];
      pokemonToInsert.push({ name: pokemon.name, no });
    });

    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'Done';
  }
}
