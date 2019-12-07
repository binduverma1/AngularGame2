import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from '../image-service.service';
import { HttpClientModule} from '@angular/common/http';
import { createRendererV1 } from '@angular/core/src/view/refs';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  title = 'Recent Photos'
  visibleImages: any[] = [];
  rimage;
  foo;
  rname;
  fvalue;
  fourValues : Array<number>;
  
  constructor(private imageServiceService:ImageServiceService) {
    this.fourValues = new Array();
    //this.visibleImages = this.imageServiceService.getImages();   
   }

  ngOnInit() {
    this.visibleImages = this.imageServiceService.getImages();
   this.randomImage();
   this.randomName();
    //console.log(this.visibleImages);
    console.log(this.fourValues);
  }
   public randomImage(){
     
    this.rimage=Math.floor(Math.random() * this.visibleImages.length);
    return this.foo=this.visibleImages[this.rimage].url;
  }

  public randomName(){
    let num=4;      
      for(let i=1; i<=4; i++){
        this.rname=Math.floor(Math.random() * this.visibleImages.length);        
        this.fourValues.push(this.visibleImages[this.rname].name);
      }
      return this.fourValues;
  } 

  
}//end export
