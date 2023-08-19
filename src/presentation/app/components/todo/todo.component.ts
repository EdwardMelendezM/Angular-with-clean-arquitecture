import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Input() inputValue:string=''
  @Output() inputValueChange = new EventEmitter<string>()
  @Output() onAdd  = new EventEmitter<void>()

  onInput(event:Event){
    const target = event.target as HTMLInputElement
    if(target){
      this.inputValue = target.value
      this.inputValueChange.emit(target.value)
    }

  }
}
