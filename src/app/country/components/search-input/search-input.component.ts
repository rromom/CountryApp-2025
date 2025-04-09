import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RESTCountry } from '../../interfaces/res-countries.interface';

@Component({
  selector: 'country-search-input',
  standalone: true,
  imports: [],
  templateUrl: './search-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {

  placeholder = input('Search');
  value = output<string>();

 }
