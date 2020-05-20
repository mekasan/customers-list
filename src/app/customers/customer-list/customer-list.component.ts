import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  /**
   * Cells
   * array of table fields fields
   */
   cells =  [
    {name: 'ID', fieldName: 'id', width: '15%'},
    {name: 'Client name', fieldName: 'name', width: '40%'},
    {name: 'Status', fieldName: 'status', width: '20%'},
    {name: 'Sum of all purchases', fieldName: 'sum', width: '25%'},
  ];
  /**
   * expProp
   * Array of fields for expand data
   */
  expProp = [
     {
       name: 'Order ID',
       fieldName: 'id'
     },
     {
       name: 'Date',
       fieldName: 'date',
     },
     {
       name: 'Sum',
       fieldName: 'sum',
     }
   ];
  /**
   * Params
   * expand - params for expand data;
   * filteredBy - option to filter by this value
   */
   params = {
     expand: {
       on: true, title: 'Purchases history:',
       prop: 'orders', expProp: this.expProp},
     filterBy: 'sum'};
  customers: Customer[];

  constructor(private customerListService: CustomerService) {}

  ngOnInit(): void {
     this.customers = this.customerListService.getCustomers();
  }
}
