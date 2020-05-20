import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerService } from './services/customer.service';
import { CustomersRouting } from './customers-routing';
@NgModule({
  declarations: [
    CustomerListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CustomersRouting,
  ],
  providers: [CustomerService]
})
export class CustomersModule { }
