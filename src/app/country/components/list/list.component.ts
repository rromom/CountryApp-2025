import { ChangeDetectionStrategy, Component, input} from '@angular/core';
import { RESTCountry } from '../../interfaces/res-countries.interface';

@Component({
  selector: 'country-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  countries = input.required<RESTCountry[]>();
}
