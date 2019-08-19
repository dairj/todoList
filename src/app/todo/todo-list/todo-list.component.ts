import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {
  // tab = this.todoService.tab;
  // subscription: Subscription;
  // isEdit = false;
  constructor(
    public todoService: TodoService,
    private activated: ActivatedRoute
  ) {
    activated.params.subscribe((data) => {
      // console.log(data);获取到data之后就可以取得data中包含的所需要的信息。
    });
  }

  get childShowTodos() {
    return this.todoService.showTodos;
  }

  ngOnInit() {
  }

  toggleComplete(todo) {
    this.todoService.toggleComplete(todo);
  }

  removeTodo(todo) {
    this.todoService.removeTodo(todo.id);
  }

  // 双击可编辑，且保证每次只能有其中一个可编辑
  toggleEdit(id) {
    this.todoService.todos.forEach(todo => {
      todo.isEdit = todo.id === id ? true : false;
    });
  }
  changeTitle(item) {
    this.todoService.changeTitle(item.id, item.title);
  }

}
