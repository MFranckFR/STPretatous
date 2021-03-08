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
  id!: String;
  product!: Product;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public pretatousService: PretatousService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.reload();
  }

  reload(){
    this.pretatousService.getProduct(this.id).subscribe((data) => {
      console.log('reload', data);
      if(data.status === 'success'){
        this.product = data.data;
      }else{
        window.alert(data.message);
      }

    });
  }

  updateProduct() {
    if (window.confirm('Souhaitez-vous mettre à jour la fiche produit ?')) {
      this.pretatousService
        .updateProduct(this.id, this.product)
        .subscribe((data) => {
          if(data.status === 'success'){
            alert(`Opération réussie ! ${data.status}`);
          }
          else if(data.status === 'error'){
            alert(`Opération échouée ! ${data.message}`);
          }else{
            alert(`Problème imprévue: ${data}`);
          }
        });
      this.router.navigateByUrl('product/products-list');
    }
  }

  backToProductList(){
    this.router.navigateByUrl('products/products-list');
  }
}
