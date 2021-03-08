import {Component, OnInit} from '@angular/core';
import {PretatousService} from '../service/pretatous.service';
import {Router, ActivatedRoute} from '@angular/router';


@Component({selector: 'app-carousel', templateUrl: './carousel.component.html', styleUrls: ['./carousel.component.css']})


export class CarouselComponent implements OnInit {

    productList : any;

    constructor(private pretatousService : PretatousService,
      private router : Router, 
      private route : ActivatedRoute) {}

    chunks(array : any, size : number) {
        let results = [];
        results = [];
        while (array.length) {
            results.push(array.splice(0, size));
        }
        return results;
    }

    ngOnInit(): void {
        this.pretatousService.getProducts(9).subscribe((data : any) => {
            this.productList = this.chunks(data.data, 3);
            console.log('data', data.data);
        });
    }

    goToView(id:String){
      this.router.navigateByUrl('product/product-view/' + id);
    }
}

