import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/git-app.interface';

@Component({
  selector: 'app-gifs-card',
  templateUrl: './gifs-card.component.html',
})
export class GifsCardComponent implements OnInit {

@Input() public gif!: Gif 

  ngOnInit(): void {
    if(!this.gif){
      throw new Error("Algo a sucedido")
    }
  }

}
