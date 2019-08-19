import { Component, OnInit, ɵSWITCH_COMPILE_INJECTABLE__POST_R3__ } from '@angular/core';
import { Todo } from './todo';
import { from } from 'rxjs';
import { TodoService } from './todo.service';
import { isNgTemplate } from '@angular/compiler';
import { Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less'],
  providers: [TodoService]// 这句话和下面的是依赖注入。
})
export class TodoComponent implements OnInit {
  title = '';
  showTodos: Todo[] = this.todoService.showTodos;
  tab = 'all';
  // leftCount: number;

  constructor(
    public todoService: TodoService,
    public route: Router,
  ) {
    route.events.subscribe((e) => {
      if ( e instanceof RoutesRecognized) {
        console.log(e);
        if (e.url.endsWith('/completed')) {
          this.switchTab('completed');
        } else if (e.url.endsWith('/uncomplete')) {
          this.switchTab('uncomplete');
        } else {
          this.switchTab('all');
        }
      }
    });
  }

  ngOnInit() {
  }

  addTodo(title) {
    if (title) {
      this.todoService.addTodo(title);
      this.title = '';
      this.switchTab('all');
    }
  }

  // 移除已完成的事项
  clearCompleted() {
    const todos = this.todoService.todos.filter(todo => todo.complete === false);
    this.todoService.todos = todos;
    this.switchTab('all');
  }
  // 移除已完成按钮是否显示
  get clearFlag() {
    return this.todoService.clearFlag;
  }

  // 获取当前还有多少项未完成
  get leftCount() {
    return this.todoService.leftCount;
  }

  // 全选或全不选
  allChange() {
    this.todoService.allChange();
  }

  // 切换标签页
  switchTab(tabchange) {
    // debugger
    this.tab = tabchange ;
    this.todoService.tab = tabchange;
    this.todoService.generateShowTodos(this.tab);
  }
}





