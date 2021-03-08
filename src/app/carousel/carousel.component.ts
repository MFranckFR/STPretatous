import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  productList:any;

  ngOnInit(): void {
    this.productList = [
      [{title:"titre1",
      description:"azdan dazdaklzdjazml djazlk",
      image:"url/vers/image"},
      {title:"titre2",
      description:"azdan dazdaklzdjazml djazlk",
      image:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"},
      {title:"titre3",
      description:"azdan dazdaklzdjazml djazlk",
      image:"url/vers/image"}],

      [{title:"titre4",
      description:"azdan dazdaklzdjazml djazlk",
      image:"url/vers/image"},
      {title:"titre5",
      description:"azdan dazdaklzdjazml djazlk",
      image:"url/vers/image"},
      {title:"titre6",
      description:"azdan dazdaklzdjazml djazlk",
      image:"url/vers/image"}],

      [{title:"titre7",
      description:"azdan dazdaklzdjazml djazlk",
      image:"url/vers/image"},
      {title:"titre8",
      description:"azdan dazdaklzdjazml djazlk",
      image:"url/vers/image"},
      {title:"titre9",
      description:"azdan dazdaklzdjazml djazlk",
      image:"url/vers/image"}],
    ];
  }

}
