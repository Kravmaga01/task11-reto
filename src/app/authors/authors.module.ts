import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './author/author.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [AuthorComponent, ListComponent],
  imports: [CommonModule],
  exports: [],
})
export class AuthorsModule {}
