import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { GridComponentComponent } from './grid-component/grid-component.component';
import { ButtonsComponentComponent } from './buttons-component/buttons-component.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { FormsComponentComponent } from './forms-component/forms-component.component';
import { DateComponentComponent } from './date-component/date-component.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { TabComponentComponent } from './tab-component/tab-component.component';
import { LayoutModule } from '@progress/kendo-angular-layout';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    GridComponentComponent,
    ButtonsComponentComponent,
    FormsComponentComponent,
    DateComponentComponent,
    DialogComponentComponent,
    TabComponentComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    GridModule,
    ButtonsModule,
    DateInputsModule,
    DialogsModule,
    LayoutModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'grid-component', component: GridComponentComponent },
      { path: 'buttons-component', component: ButtonsComponentComponent },
      { path: 'forms-component', component: FormsComponentComponent },
      { path: 'date-component', component: DateComponentComponent },
      { path: 'dialog-component', component: DialogComponentComponent },
      { path: 'tab-component', component: TabComponentComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
