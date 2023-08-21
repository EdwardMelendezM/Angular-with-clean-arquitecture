import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-git-app',
  templateUrl: './git-app.component.html',
  styleUrls: ['./git-app.component.css']
})
export class GitAppComponent {

  constructor(private gifService:GifsService){}

  get gifs(){
    return this.gifService.gifList;
  }

}
