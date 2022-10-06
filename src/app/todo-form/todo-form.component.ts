import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  @Output() addNewTodo = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  userInput: string = '';

  submitNewTodo(): void {
    this.addNewTodo.emit(this.userInput);
    this.userInput = '';
  }
}
