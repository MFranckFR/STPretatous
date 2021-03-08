import {Component, OnInit} from '@angular/core';
import {PretatousService} from 'src/app/service/pretatous.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({selector: 'app-product-list', templateUrl: './product-list.component.html', styleUrls: ['./product-list.component.css']})
export class ProductListComponent implements OnInit {

    productList : any = [];

    // Pour la rechercher un produit dans la barre de recherche
    filterTerm !: string;

    imageToShow : any;
    isImageLoading !: boolean;
    imgUrl : string = 'https://picsum.photos/200/300/?random';


    constructor(private pretatousService : PretatousService, 
        private router:Router, private route:ActivatedRoute) {}

    ngOnInit() {
        this.loadproductList()
    }

    // Charger la liste des produits
    loadproductList() {
        return this.pretatousService.getAllProducts().subscribe((d) => {
            this.productList = d.data;
        })
    }

    // Pour effacer une fiche produit
    deleteProduct(id : any) {
        if (window.confirm('Voulez-vous vraiment supprimer cette fiche produit?')) {
            this.pretatousService.deleteProduct(id).subscribe(data => {
                this.loadproductList()
            })
        }
        return false;
    }

    selectProduct(id:String){
        this.router.navigateByUrl('product/product-view/' + id);
    }
}