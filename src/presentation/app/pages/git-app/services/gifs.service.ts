import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/git-app.interface';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _gifList:Gif[]=[]
  private _tagsHistory: string[]=[]
  private serviceUrl: string = "https://api.giphy.com/v1/gifs"
  private apiKey: string = "uPXnAZMiN9IxNL5GnLXIR46XQQoQyCSr"

  constructor(private http:HttpClient) {
    this.loadLocalStorage();
    this.loadFirstGifs();
  }

  get tagsHistory(){
    return [...this._tagsHistory]
  }

  get gifList(){
    return [...this._gifList]
  }

  private saveLocalStorage():void{
    localStorage.setItem("history", JSON.stringify(this._tagsHistory) )
  }

  private loadLocalStorage():void{
    const temp = localStorage.getItem("history")
    if(!temp) return 
    this._tagsHistory = JSON.parse(temp)
  }


  private organizeHistory(tag: string){
    tag = tag.toLowerCase()

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldTag)=>oldTag!==tag)
    }

    this._tagsHistory.unshift(tag)
    this._tagsHistory = this.tagsHistory.splice(0,10)
    this.saveLocalStorage()
  }

  private loadFirstGifs():void{
    if (this._tagsHistory.length===0) return
    this.searchTag(this._tagsHistory[0])
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

  deleteTag(tagDelete:string):void{
    this._tagsHistory = [...this._tagsHistory.filter(tag => tag !== tagDelete)]
    this.saveLocalStorage();
    this.loadFirstGifs();
  }
  
}