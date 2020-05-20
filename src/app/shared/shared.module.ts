import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { ExpandComponent } from './expand/expand.component';
import { FormsModule } from '@angular/forms';
import { RestrictNumberDirective } from './restrict.number.directive';

@NgModule({
  declarations: [
    TableComponent,
    ExpandComponent,
    RestrictNumberDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [TableComponent, RestrictNumberDirective],
})
export class SharedModule { }
