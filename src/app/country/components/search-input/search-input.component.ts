import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'country-search-input',
  standalone: true,
  imports: [],
  templateUrl: './search-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {

  placeholder = input('Search');


  onSearch( value: string ) {

  }
 }
