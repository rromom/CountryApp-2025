import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/res-countries.interface';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mappers';


const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);


  searchByCapital( query: string ): Observable<Country[]>{

    query = query.toLocaleLowerCase();

    return this.http
      .get<RESTCountry[]>(`${ API_URL }/capital/${ query }`)
      .pipe(
        map( resp => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
        catchError( (error) => {
          console.log( 'Error Fetching', error );
          return throwError(
            () => {
              new Error(`Don't get any country with this query`);
            }
          )
        })
      );


  }

}
