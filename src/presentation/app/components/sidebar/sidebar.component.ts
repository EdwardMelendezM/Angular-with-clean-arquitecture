import { Component } from '@angular/core';
import { GifsService } from '../../../app/pages/git-app/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {


  constructor(private gifsService:GifsService){}

  get tags(){
    return this.gifsService.tagsHistory;
  }

  

}
