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
  displayPic;
  rname;
  fvalue;
  fourValues : Array<number>;
  shuffleFourVales: any[]=[]
  imageName;
  optionClicked=false;
  correctChoice=false;
  buttonBackground:string[]=['rgb(113,157,252)',
                              'rgb(113,157,252)',
                              'rgb(113,157,252)',
                              'rgb(113,157,252)'];
 
  constructor(private imageServiceService:ImageServiceService) {
    this.fourValues = new Array();
     
   }

  ngOnInit() {
   this.visibleImages = this.imageServiceService.getImages();
   this.randomImage();
   this.randomName();
    //console.log("from ngOnInIt :" + this.visibleImages);
    //console.log("from ngOninit" + this.fourValues);
    //console.log("from ngOninit" + imageName);
  }//end of ng
  
  public randomImage(){     
    this.rimage=Math.floor(Math.random() * this.visibleImages.length);

    this.imageName =this.visibleImages[this.rimage].name;
    return this.displayPic=this.visibleImages[this.rimage].url;
  }//end of randomImage.

  public randomName(){
    let num=2; 
    this.fourValues=[];
    this.fourValues.push(this.imageName);
    //console.log("correct: " + this.fourValues);  
      for(let i=0; i<=num; i++){
        this.rname=Math.floor(Math.random() * this.visibleImages.length); 
        if  (!this.fourValues.includes(this.visibleImages[this.rname].name))
          {
          this.fourValues.push(this.visibleImages[this.rname].name);
          } else
          { i--;
          }
      } //end of for
       //console.log(this.fourValues);
    }   
    
    public matchName(buttonNumber: number){     
      if(!this.optionClicked){
        if(this.imageName === this.fourValues[buttonNumber]){         
          this.correctChoice = true;
          console.log("bindu : " + this.fourValues[buttonNumber] );
        }
        else this.correctChoice = false;
        if (this.correctChoice){
          this.buttonBackground[buttonNumber] ='green';
        }
        else {
          this.buttonBackground[buttonNumber] ='red';
        }
      }      
    }//end of matchName
    public resetButtons(){
     for(let k=0; k< this.fourValues.length; k++){
       this.buttonBackground[k]='rgb(113,157,252)';
     }
    };  

    
    
 

 


  
}//end export
