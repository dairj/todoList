import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoRoutingModule } from './todo/todo-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    TodoRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
