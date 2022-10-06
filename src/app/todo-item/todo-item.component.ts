import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem: Todo = {} as Todo;
  @Output() complete = new EventEmitter<void>();
  @Output() remove = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  completeTodo(): void {
    this.todoItem.completed = true;
    this.complete.emit();
  }

  removeTodo(): void {
    this.remove.emit();
  }
}
