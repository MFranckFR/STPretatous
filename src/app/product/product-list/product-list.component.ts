import { Component, OnInit } from '@angular/core';
import { PretatousService } from 'src/app/service/pretatous.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList:any = [];

  //Pour la rechercher un produit dans la barre de recherche
  filterTerm!: string;

  imageToShow: any;
  isImageLoading!: boolean;
  imgUrl: string = 'https://picsum.photos/200/300/?random';


  constructor(private pretatousService: PretatousService) {}

  ngOnInit() {
    this.loadproductList()
  }

  //Charger la liste des produits
  loadproductList(){
    return this.pretatousService.getAllProducts().subscribe((data: {}) => {
      this.productList = data;
    })
  }

  //Pour effacer une fiche produit
  deleteProduct(id: any){
  if (window.confirm('Voulez-vous vraiment supprimer cette fiche produit?')){
    this.pretatousService.deleteProduct(id).subscribe(data => {
      this.loadproductList()
    })
  }
}  
}

  

  

