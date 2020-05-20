import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() cells;
  @Input() rowsNames;
  @Input() data;
  @Input() params;
  sortDirection = 'ASC';
  activeSort: number;
  activeExpand: number;
  search: any;
  filtered: any;
  constructor() { }
  ngOnInit(): void {
    this.filtered = this.data.map(item => item);
  }
  sort(name) {
    if (this.sortDirection === 'ASC') {
      this.filtered.sort((a, b) => {
        if (a[name] > b[name]) {
          return 1;
        }
        if (a[name] < b[name]) {
          return -1;
        }
        return 0;
      });
      this.sortDirection = 'DESC';
    }else if (this.sortDirection === 'DESC') {
      this.filtered.sort((a, b) => {
        if (a[name] < b[name]) {
          return 1;
        }
        if (a[name] > b[name]) {
          return -1;
        }
        return 0;
      });
      this.sortDirection = 'ASC';
    }
  }

  toggleExpand(i: number) {
    if (this.activeExpand === i) {
      this.activeExpand = null;
    }else {
      this.activeExpand = i;
    }
  }

  toggleSort(i: number) {
    if (this.activeSort === i) {
      this.activeSort = null;
    }else {
      this.activeSort = i;
    }
  }

  onFilter() {
    if (!this.search || this.search === '') {
      return this.filtered = this.data.map(item => item);
    }
    this.filtered =  this.data.filter(item => item[this.params.filterBy] <= this.search);
  }
}
