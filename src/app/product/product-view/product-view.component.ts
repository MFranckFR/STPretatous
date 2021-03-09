import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PretatousService } from 'src/app/service/pretatous.service';
import { Product } from 'src/app/shared/product';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  id!: string;
  product!: Product;

  constructor(private route: ActivatedRoute,private router: Router, private pretatousService: PretatousService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
      
    this.pretatousService.getProduct(this.id)
      .subscribe(data => {
        console.log(data)
        this.product = data;
      });
  }

}
