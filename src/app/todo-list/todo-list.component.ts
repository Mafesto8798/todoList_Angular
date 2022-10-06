import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  indexTracker = 2;
  nothingToDo: boolean = false;
  allTodos: Todo[] = [
    {
      id: 0,
      task: 'Clean the office.',
      completed: false,
    },
    {
      id: 1,
      task: 'Pass the todo challenge.',
      completed: true,
    },
  ];

  addTask(inTodo: string): void {
    if (inTodo.length >= 1) {
      if (this.allTodos.length == 0) {
        this.nothingToDo = false;
      }
      let newTodo = {
        id: this.indexTracker,
        task: inTodo,
        completed: false,
      };
      this.allTodos.push(newTodo);
      this.indexTracker++;
    }
  }

  removeTask(task: Todo): void {
    let targetIndex = this.allTodos.indexOf(task);
    this.allTodos.splice(targetIndex, 1);
    if (this.allTodos.length == 0) {
      this.nothingToDo = true;
    }
  }
}
