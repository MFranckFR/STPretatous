import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PretatousService} from 'src/app/service/pretatous.service';
import {Product} from 'src/app/interface/product';
import {FormsModule} from '@angular/forms';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {BookingRequest} from 'src/app/interface/booking-request';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({selector: 'app-product-view', templateUrl: './product-view.component.html', styleUrls: ['./product-view.component.css']})

export class ProductViewComponent implements OnInit {
    id !: String;
    product !: Product;
    bookingRequest !: BookingRequest;
    bookingRequestForm !: FormGroup;
    userID !: string;

    bookingRequestIsDone : boolean = false;

    range !: FormGroup;
    showForm = false;

    constructor(
        private route : ActivatedRoute,
        private fb : FormBuilder,
        private router : Router,
        private pretatousService : PretatousService,
        private _snackBar: MatSnackBar
        ) {}

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];

        this.range = new FormGroup({start: new FormControl(), end: new FormControl()});

        this.bookingRequestForm = this.fb.group({
            product: [
                '',
                [Validators.required]
            ],
            owner: [
                '',
                [Validators.required]
            ],
            loaner: [
                '',
                [Validators.required]
            ],
            dtBkingStart: [
                '',
                [Validators.required]
            ],
            dtBkingEnd: [
                '',
                [Validators.required]
            ]
        });

        // preparation pour recup ID emprunteur = userID
        // JohnAttend2min
        this.userID = '604523bcace57e551815de60';
        this.loadProduct();
    }

    loadProduct() {
        this.pretatousService.getProduct(this.id).subscribe(d => {
            console.log('loadProduct', d)
            this.product = d.data;
            this.bookingRequestForm.patchValue({product: this.product._id, owner: this.product.owner, loaner: this.userID});
        });
    }

    toggleBookingForm() {
        this.showForm = !this.showForm;
        return true;
    }


    sendBookingRequest() {
        console.log('sendBookingRequest', this.bookingRequestForm.value);
          this.pretatousService.createBookingRequest(this.bookingRequestForm.value).subscribe((resp:any) => {
            // console.log('resp_booking', resp);
            if(resp){
              if(resp.status === 'success'){
                this.bookingRequestIsDone = true;
                this.notice("Votre demande de réservation a bien été enregistrée.", "Success");
              }else if(resp.status === 'error'){
                this.notice(resp.message, "ErrorMngeable");
              }else{
                this.notice("Erreur inconnue", "Unkown Error");
                console.error('sendBookingRequest-respOk-error', resp.status);
              }
            }else{
              this.notice("Erreur inconnue", "Really Unkown Error");
              console.error('sendBookingRequest-respNok-error', resp);
            }
          }, (error) => {
            this.notice(error.error.data.message, "ApiServerError", 0);
            //console.error('ServerError', error);
          });
        return false;
    }

    notice(message:string, action:string, timerInMs=4000) {
      const NOTICE_TIMER = 4000;
      this._snackBar.open(message, action, {duration: timerInMs});
    }
}

