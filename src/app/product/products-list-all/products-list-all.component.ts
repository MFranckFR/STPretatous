import { Component, OnInit } from '@angular/core';
import { PretatousService } from 'src/app/service/pretatous.service';

@Component({
  selector: 'app-products-list-all',
  templateUrl: './products-list-all.component.html',
  styleUrls: ['./products-list-all.component.css']
})
export class ProductsListAllComponent implements OnInit {

    productsListAll: any = [];

  constructor(private pretatousService: PretatousService) { }

  ngOnInit() {
    this.loadProductsListAll()
  }

  loadProductsListAll(){
    return this.pretatousService.getAllProducts().subscribe((data: {})=>{
      this.productsListAll = data;
    })
  }
}


