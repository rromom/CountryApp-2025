import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { ListComponent } from "../../components/list/list.component";

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchInputComponent, SearchInputComponent, ListComponent],
  templateUrl: './by-capital-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapitalPageComponent {



}
