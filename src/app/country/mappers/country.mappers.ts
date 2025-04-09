import { Country } from "../interfaces/country.interface";
import { RESTCountry } from '../interfaces/res-countries.interface';

export class CountryMapper {

  static mapRestCountryToCountry( resCountry: RESTCountry ): Country{

    return {
      capital: resCountry.capital.join(','),
      cca2: resCountry.cca2,
      flag: resCountry.flag,
      flagSvg: resCountry.flags.svg,
      name: resCountry.translations['spa'].common ?? resCountry.name.common,
      population: resCountry.population
    }
  }

  static mapRestCountryArrayToCountryArray( resCountry: RESTCountry[] ): Country[]{

    return resCountry.map( this.mapRestCountryToCountry );

  }

}
