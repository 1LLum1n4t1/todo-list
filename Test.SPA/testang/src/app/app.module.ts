import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemsService } from './_services/items.service';

@NgModule({
   declarations: [
      AppComponent,
      ItemsComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule
   ],
   providers: [
      ItemsService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
