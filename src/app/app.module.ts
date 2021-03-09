import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './footerFiles/footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HelpComponent } from './footerFiles/help/help.component';
import { PrivacyPolicyComponent } from './footerFiles/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './footerFiles/terms-of-use/terms-of-use.component';
import { ContactFormComponent } from './footerFiles/contact-form/contact-form.component';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { LenderComponent } from './components/lender/lender.component';
import { BorrowerComponent } from './components/borrower/borrower.component';


//Import des modules pour contact-form
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';


//Modules pour Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { SubscribeComponent } from './backup/subscribe/subscribe.component';
import { AngularMaterialModule } from './angular-material.module';

//Import du pipe pour la searchBar
import { UploadImgComponent } from './upload-img/upload-img.component';
import { FileUploadModule } from 'ng2-file-upload';


import { BookingAddComponent } from './booking-add/booking-add.component';
import { BookingComponent } from './booking/booking.component';
import { LoanComponent } from './loan/loan.component';
import { ReturnComponent } from './return/return.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CarouselComponent,
    HelpComponent,
    PrivacyPolicyComponent,
    TermsOfUseComponent,
    ContactFormComponent,
    LenderComponent,
    BorrowerComponent,
    AuthComponent,
    SubscribeComponent,
    UploadImgComponent,
    BookingAddComponent,
    BookingComponent,
    LoanComponent,
    ReturnComponent,
    SearchBarComponent,

 
  
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ProductModule,
    UserModule,
    Ng2SearchPipeModule,
    
    
    
  

    //Module pour uploader les images sur le serveur
    FileUploadModule,

    //Ajout des modules ci-dessous pour contact-form
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule,

    
    
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
