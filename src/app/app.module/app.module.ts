
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule  } from '@angular/core';

import { AppComponent } from '../app.component';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
    BrowserModule,
  ],
  providers: [],
  bootstrap:[AppComponent]
})
export class AppModuleModule { }
