import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersRouting } from './customers-routing';
@NgModule({
  declarations: [
    CustomerListComponent,
  ],
  imports: [
    CommonModule,
    CustomersRouting,
  ],
  providers: []
})
export class CustomersModule { }
