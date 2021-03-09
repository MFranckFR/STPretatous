
import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PretatousService } from 'src/app/service/pretatous.service';



@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {

  productForm: FormGroup;
  disabledSubmitButton: boolean = true;
  submitted = false;
  // urlImg = "https://www.naturephotographie.com/wp-content/uploads/2018/02/Solitude-Hymns.jpg";
  // selectedFile!: File;
  // const URL = '/api/';

  @HostListener('input') oninput() {

    if (this.productForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(private fb: FormBuilder,private pretatousService: PretatousService) {

    this.productForm = fb.group({
      'title': ['', Validators.required],
      'description': ['', Validators.required],
      'owner': ['', [Validators.required]],
      'ownerPseudo': ['', [Validators.required]],
      'status': ['', Validators.required],
      'available': ['true'],
      'image': ['']
    });
  }

  get f() {
    return this.productForm.controls;
  }

    // selectedFile(event: any){
    //   if (event.target.files){
    //     var reader = new FileReader()
    //     reader.readAsDataURL(event.target.files[0])
    //     reader.onload = (event:any)=> {
    //       this.urlImg = event.target.result
    //     }
    //   }
    // }

    // onFileSelected(event: any){
    //   this.selectedFile = event.target.files[0];
    // }

    // onUpload(){
    //   const fd = new FormData();
    //   fd.append('image', this.selectedFile, this.selectedFile.name)
    //   this.http.post('http://www.zibouibi.fr', fd)
    //   .subscribe(res =>{
    //     console.log(res);
    //   })

    // }


 

  onSubmit() {
    this.pretatousService.createProduct(this.productForm.value).subscribe(() => {
        alert('Votre produit a bien été enregistré.');
        this.productForm.reset();
        this.disabledSubmitButton = false;
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }

  onReset() {
    this.productForm.reset();
  }

  ngOnInit(): void {}

}
