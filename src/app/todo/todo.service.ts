// 主要是对todo数组进行一系列操作，可以添加，删除，修改todo的complete状态等等
import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Subject } from 'rxjs';
import { summaryFileName } from '@angular/compiler/src/aot/util';

const localStorage = window.localStorage;
const STORAGE_KEY = 'todo';

@Injectable()
export class TodoService {
    // 初始化一个空数组，用来保存所有的待办事项，里面的每一项是一个Todo对象，代表一条待办事项
    // todos: Todo [] = [];
    _todos: Todo [] = [];
    showTodos: Todo [];
    tab = '';
    clearFlag = false;
    leftCount: number;

    constructor() {
        this.todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];  // 每次刷新时初始化数组
    }

    // public switchEvent = new Subject();
    // public childSwitchEvent = new Subject();

    // 本地存储
    get todos() {
        return this._todos;
    }

    set todos(v) {
        this._todos = v;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(v));
    }

    addTodo(desc) {
        const todo = new Todo(desc);
        this.todos = [...this.todos, todo]; // 解构赋值
    }

    removeTodo(id: number): Todo[] {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.generateShowTodos(this.tab);
        return this.todos;
    }

    getTodo(id: number): Todo {
        return this.todos.filter(todo => todo.id = id).pop();
    }

    // 切换待办事项的完成状态
    toggleComplete(todo: Todo) {
        todo.complete = !todo.complete;
        this.todos = this.todos; // 理解一下？
        this.generateShowTodos(this.tab);
        // this.getLeftCount();
    }

    // 通过完成状态来移除事项，例如移除所有已完成事项
    clearCompleted() {
        this.todos = this.todos.filter(item => item.complete === false);
        return this.todos;
    }

    // 移除已完成按钮是否显示
    showClearFlag() {
        let len = 0;
        len = this.todos.filter(todo => todo.complete === true).length;
        if (len > 0) {
            this.clearFlag = true;
        } else {
            this.clearFlag = false;
        }
    }

    // 获取当前还有多少项未完成
    getLeftCount() {
        this.leftCount = this.todos.filter(todo => todo.complete === false).length;
    }

  // 全选或者全不选
  allChange() {
        const hasUnfinished = !!this.todos.find(todo => todo.complete === false );
        this.todos = this.todos.map(todo => {
            todo.complete = hasUnfinished;
            return todo;
        });
        this.generateShowTodos(this.tab);
        this.getLeftCount();
    }

    // 双击可编辑后更新todo数组及相关内存。
    changeTitle(id, title) {
        let item;
        item = this.todos.find(todo => {
            return todo.id === id;
        });
        item.title = title;
        item.isEdit = false;
        this.todos = this.todos;
    }

    // 获取全部的数组
    generateShowTodos(tab) {
        tab = tab || this.tab; // 是否传参都可以
        let showTodos;
        if (tab === 'all') { // 获取全部
          showTodos = this.todos.slice();
        } else  if (tab === 'uncomplete') { // 获取未完成
          showTodos = this.todos.filter(item => item.complete === false);
        } else if (tab === 'completed') { // 获取已完成
          showTodos = this.todos.filter(item => item.complete === true);
        }
        this.showTodos = showTodos;
        this.showClearFlag();
        this.getLeftCount();
    }
}
