import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-component',
  templateUrl: './tab-component.component.html',
  styleUrls: ['./tab-component.component.css']
})
export class TabComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public onTabSelect(e) {
    console.log(e);
  }

}
