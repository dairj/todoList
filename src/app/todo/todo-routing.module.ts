import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  { path: 'todo-list/:tab', component: TodoListComponent },
  { path: '', redirectTo: '/todo-list/all', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
