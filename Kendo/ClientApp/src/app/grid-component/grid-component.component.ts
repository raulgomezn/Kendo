import { Component, OnInit } from '@angular/core';
import { products, sampleProducts } from '../utilitaries/products';
import { State, process } from '@progress/kendo-data-query';
import { GridComponent, GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-grid-component',
  templateUrl: './grid-component.component.html',
  styleUrls: ['./grid-component.component.css']
})
export class GridComponentComponent implements OnInit {
  public state: State = {
    skip: 0,
    take: 5,

    // Initial filter descriptor
    filter: {
      logic: 'and',
      filters: [{ field: 'ProductName', operator: 'contains', value: 'Chef' }]
    }
  };

  public gridData: GridDataResult = process(sampleProducts, this.state);

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(sampleProducts, this.state);
  }
  constructor() { }

  ngOnInit() {
  }

}
