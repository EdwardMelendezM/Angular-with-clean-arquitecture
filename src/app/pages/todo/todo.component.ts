import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  inputValue:string =""
  dataList: Array<any> = [
    {
      id:crypto.randomUUID(),
      text:"Comer de una vez",
      done:true,
    },
    {
      id: crypto.randomUUID(),
      text: "Saltar en la cama",
      done: false,
    },
    {
      id: crypto.randomUUID(),
      text: "Ir a dormir temprano",
      done: false,
    }
  ]

  trackByFn(index:number,item:any){
    return item.id  
  }

  onAdd(){
    if(this.inputValue.trim().length<3) return ;
    let newTodo = {
      id:crypto.randomUUID(),
      text: this.inputValue,
      done:false
    }
    this.dataList = [...this.dataList, newTodo]
    this.inputValue=''
  }
  isEditing(item:any){
    item.editing=!item.editing
    if(!item.editing){
      console.log("Se cambio gaaa")
    }
  }


  onDelete(id:string){
    if(this.dataList.length==1) return 
    this.dataList=[...this.dataList.filter((item)=>item.id!==id)]
  }
}
