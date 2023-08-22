import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-lazy-image",
  templateUrl:"lazy-image.component.html"
})

export class LazyImageComponent implements OnInit{

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';


  hasLoaded: boolean = false

  onLoad(){
    this.hasLoaded=true
  }

  ngOnInit(): void {
    if(!this.url || !this.alt){
      throw new Error("Url and alt are required")
    } 
  }

}