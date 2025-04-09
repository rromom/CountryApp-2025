import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { ListComponent } from "../../components/list/list.component";
import { CountryService } from '../../services/country.service';
import { RESTCountry } from '../../interfaces/res-countries.interface';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchInputComponent, SearchInputComponent, ListComponent],
  templateUrl: './by-capital-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapitalPageComponent {

  countryService = inject(CountryService);

  isLoading = signal(false);
  isError = signal<string|null>(null);
  countries = signal<RESTCountry[]>([]);

  onSearch( value: string ) {

    if( this.isLoading() ) return;

    this.isLoading.set(true);
    this.isError.set(null);

    this.countryService.searchByCapital( value )
    .subscribe( countries => {
      this.isLoading.set(false);
      this.countries.set(countries);
    } );

  }

}
