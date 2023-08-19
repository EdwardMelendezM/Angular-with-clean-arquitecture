import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() dataList:any
  @Input() trackByFn:any
  @Output() onDelete = new EventEmitter<string>()
  @Output() isEditing = new EventEmitter<any>();
}
