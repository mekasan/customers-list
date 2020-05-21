import { Injectable } from '@angular/core';

export interface Orders {
  id: number;
  date: Date;
  sum: number;
}

export interface Customer {
  id: number;
  name: string;
  status: string;
  sum: number;
  orders: Orders[];
}



@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  /**
   * Get Customers
   * @return array of Customers
   */
  getCustomers(): Customer[] {
    return [
      {id: 1, name: 'Ada Clarke', status: 'gold', sum: 24914, orders: [
          {id: 12, date: new Date( '2020-01-18'), sum: 1967},
          {id: 25, date: new Date('2020-04-23'), sum: 10490},
          {id: 26, date: new Date( '2020-01-18'), sum: 1967},
          {id: 27, date: new Date('2020-04-23'), sum: 10490},
        ]},
      {id: 2, name: 'Grace Hooper', status: 'regular', sum: 47899, orders: [
          {id: 55, date: new Date( '2020-03-15'), sum: 22455},
          {id: 56, date: new Date('2020-04-21'), sum: 25444},
        ]},
      {id: 3, name: 'Joan Lovelace', status: 'gold', sum: 5555, orders: [
          {id: 57, date: new Date( '2020-02-28'), sum: 2777.5},
          {id: 58, date: new Date('2020-03-13'), sum: 2777.5},
        ]},
      {id: 4, name: 'Joan Lovelace', status: 'gold', sum: 5556, orders: [
          {id: 59, date: new Date( '2020-04-28'), sum: 2778},
          {id: 60, date: new Date('2020-04-13'), sum: 2778},
        ]}
    ];
  }
}
