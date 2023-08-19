import { Injectable } from '@angular/core';
import axios from "axios"

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor() { }

  async getData(url:string){
    return axios.get(url)
      .then(res=>res.data)
      .catch(error=>console.log(error))
  }

}
