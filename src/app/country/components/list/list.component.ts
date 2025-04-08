import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'country-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent { }
