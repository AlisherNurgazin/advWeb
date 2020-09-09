import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {navComponent} from './navbar/nav.component';
import {addComponent} from './add/add.component';
import {listComponent} from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    navComponent,
    addComponent,
    listComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
