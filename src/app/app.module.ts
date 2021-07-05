import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TesteNgModule } from './teste-ng/teste-ng.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TesteNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
