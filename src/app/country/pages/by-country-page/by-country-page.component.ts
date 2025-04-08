import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { ListComponent } from "../../components/list/list.component";

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [SearchInputComponent, ListComponent],
  templateUrl: './by-country-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountryPageComponent {

  placeholder = input('Search');

}
