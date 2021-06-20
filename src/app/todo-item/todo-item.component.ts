import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
   @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  @Input() i : number;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo: Todo){

    this.todoDelete.emit(todo);
    console.log('click has been triggered')
  }

  onCheckboxClick(todo:Todo)
  {
    this.todoCheckbox.emit(todo);

  }

}
