import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-buttons-component',
  templateUrl: './buttons-component.component.html',
  styleUrls: ['./buttons-component.component.css']
})
export class ButtonsComponentComponent implements OnInit {

  constructor() { }

   imageUrl = 'https://demos.telerik.com/kendo-ui/content/shared/icons/sports/snowboarding.png';

  public splitButtonItems: Array<any> = [{
    text: 'Keep Text Only',
    icon: 'paste-plain-text',
    click: () => { console.log('Keep Text Only click handler'); }
  }, {
    text: 'Paste as HTML',
    icon: 'paste-as-html'
  }, {
    text: 'Paste Markdown',
    icon: 'paste-markdown'
  }, {
    text: 'Set Default Paste'
  }];

  dropDownButtonItems: Array<any> = [{
    text: 'My Profile'
  }, {
    text: 'Friend Requests'
  }, {
    text: 'Account Settings'
  }, {
    text: 'Support'
  }, {
    text: 'Log Out'
  }];

  ngOnInit() {
  }

  public onSplitButtonClick(dataItem: any): void {
    console.log('Paste');
  }

  public onSplitButtonItemClick(dataItem: any): void {
    if (dataItem) {
      console.log(dataItem.text);
    }
  }

  onButtonClick() {
    console.log('click');
  }
}
