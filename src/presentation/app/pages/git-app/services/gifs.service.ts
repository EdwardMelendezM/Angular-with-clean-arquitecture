import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/git-app.interface';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _gifList:Gif[]=[]
  private _tagsHistory: string[]=[]
  private serviceUrl: string = "https://api.giphy.com/v1/gifs"
  private apiKey: string = "uPXnAZMiN9IxNL5GnLXIR46XQQoQyCSr"

  constructor(private http:HttpClient) { }

  get tagsHistory(){
    return [...this._tagsHistory]
  }

  get gifList(){
    return [...this._gifList]
  }

  private organizeHistory(tag: string){
    tag = tag.toLowerCase()

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldTag)=>oldTag!==tag)
    }

    this._tagsHistory.unshift(tag)
    this._tagsHistory = this.tagsHistory.splice(0,10)
  }

  searchTag( tag:string ) :void {
    if(tag.trim().length<2) return 
    this.organizeHistory(tag)


    const params = new HttpParams()
      .set('api_key',this.apiKey)
      .set('limit','10')
      .set('q',tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{ params })
    .subscribe(resp=>{
      this._gifList=resp.data
    })
  }
  
}