import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {
  visibleImages = [{"id": 1, "name":"p1", "url":"assets/img/p1.jpg"},
  {"id": 2, "name":"p2", "url":"assets/img/p2.jpg"},
  {"id": 3, "name":"p3", "url":"assets/img/p3.jpg"},
  {"id": 3, "name":"p4", "url":"assets/img/p4.jpg"},
  {"id": 3, "name":"p5", "url":"assets/img/p5.jpg"},
  {"id": 3, "name":"p6", "url":"assets/img/p6.jpg"}];
  getImages(){
    return this.visibleImages;
  }
  constructor() {
    this.getImages();
  }
}
