import { Component, OnInit } from '@angular/core';
import { PretatousService } from '../service/pretatous.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})



export class CarouselComponent implements OnInit {

  productList : any;
  // productListTemp: any;
  // slides: any = [[]];

  // productList = [
  //   [{title:"titre1",
  //   description:"ma description",
  //   image:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(19).jpg"},
  //   {title:"titre2",
  //   description:"ma description 2",
  //   image:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"},
  //   {title:"titre3",
  //   description:"ma description 3",
  //   image:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(17).jpg"}],
  //   [{title:"titre4",
  //   description:"ma description 4",
  //   image:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(10).jpg"},
  //   {title:"titre5",
  //   description:"ma description 5",
  //   image:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(11).jpg"},
  //   {title:"titre6",
  //   description:"ma description 6",
  //   image:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(14).jpg"}],
  //   [{title:"titre7",
  //   description:"ma description 7",
  //   image:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(16).jpg"},
  //   {title:"titre8",
  //   description:"ma description 8",
  //   image:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(12).jpg"},
  //   {title:"titre9",
  //   description:"ma description 9",
  //   image:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(15).jpg"}]
  // ];  

  constructor(private pretatousService: PretatousService) { }

  chunks(array: any, size: number) {
    let results = [];
    results = [];
    while (array.length) {
      results.push(array.splice(0, size));
    }
    return results;
  }

  ngOnInit(): void {
    // this.slides = this.chunk(this.productList, 3);
        this.pretatousService.getProducts(9).subscribe((data: any) => {
        this.productList = this.chunks(data.data, 3);
        console.log('data', data.data);
      });
    }
  }


  
