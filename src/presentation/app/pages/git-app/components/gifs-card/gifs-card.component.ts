import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/git-app.interface';

@Component({
  selector: 'app-gifs-card',
  templateUrl: './gifs-card.component.html',
})
export class GifsCardComponent {

@Input() public gifs: Gif[]=[]

}
