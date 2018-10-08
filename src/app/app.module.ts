import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { PanelTextComponent } from './panel-text/panel-text.component';
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    PanelTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
