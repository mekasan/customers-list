import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { ExpandComponent } from './expand/expand.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TableComponent,
    ExpandComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [TableComponent],
})
export class SharedModule { }
