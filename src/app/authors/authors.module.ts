import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './author/author.component';

@NgModule({
  declarations: [AuthorComponent, AuthorComponent],
  imports: [CommonModule],
  exports: [AuthorComponent],
})
export class AuthorsModule {}
