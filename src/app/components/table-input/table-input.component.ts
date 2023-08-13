import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-table-input',
  templateUrl: './table-input.component.html',
  styleUrls: ['./table-input.component.css']
})
export class TableInputComponent {
  @Output() search = new EventEmitter<string>()

  onSearch(event:any){
    const term = event?.target?.value as string
    if(term){
      this.search.emit(term)
    }
  }

}
