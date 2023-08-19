import { Component,OnInit } from '@angular/core';
import { AxiosService } from '../../../app/services/axios.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any
  originalUsers:any
  constructor( private servicioAxios:AxiosService ){}
  api_url: string = environment.api_url
  
  async ngOnInit(){
    this.users = await this.servicioAxios.getData(this.api_url)
    this.users = this.users.results
    this.originalUsers=this.users.slice()
  }

}
