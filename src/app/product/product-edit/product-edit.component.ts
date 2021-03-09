import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { PretatousService } from 'src/app/service/pretatous.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  id!: string;
  product!: Product;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public pretatousService: PretatousService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.pretatousService.getProduct(this.id).subscribe((data) => {
      console.log(data);
      this.product = data;
    });
  }

  updateProduct() {
    if (window.confirm('Souhaitez-vous mettre à jour la fiche produit ?')) {
      this.pretatousService
        .updateProduct(this.id, this.product)
        .subscribe((data) => {
          console.log(data);
        });
      this.router.navigateByUrl('product/products-list');
    }
  }
}
