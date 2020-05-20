import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-expand',
  templateUrl: './expand.component.html',
  styleUrls: ['./expand.component.scss']
})
export class ExpandComponent {
  @Input() items;
  @Input() params;
}
