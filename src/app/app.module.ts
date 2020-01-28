
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule,
    InputTextModule,
    ButtonModule,
    TableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
