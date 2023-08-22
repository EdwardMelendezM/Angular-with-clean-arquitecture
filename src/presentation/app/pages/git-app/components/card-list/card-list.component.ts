import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/git-app.interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent implements OnInit {

  @Input() public gifs: Gif[]=[]

  ngOnInit(): void {
    if(!this.gifs) throw new Error("Gif property is required")
  }
}
