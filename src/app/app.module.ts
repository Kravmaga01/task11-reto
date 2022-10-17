import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthorComponent } from './authors/author/author.component';
import { ListComponent } from './authors/list/list.component';

@NgModule({
  declarations: [AppComponent, AuthorComponent, ListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
