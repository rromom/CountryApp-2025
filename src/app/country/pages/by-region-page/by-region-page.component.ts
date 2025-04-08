import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListComponent } from "../../components/list/list.component";

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './by-region-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByRegionPageComponent { }
