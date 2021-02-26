import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HelpComponent } from './help/help.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { ReturnModule } from './return/return.module';
import { ReservationModule } from './reservation/reservation.module';
import { ReservationRequestModule } from './reservation-request/reservation-request.module';
import { LenderComponent } from './components/lender/lender.component';
import { BorrowerComponent } from './components/borrower/borrower.component';



//Import des modules pour contact-form
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


//Modules pour Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { SubscribeComponent } from './subscribe/subscribe.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SigninComponent,
    CarouselComponent,
    HelpComponent,
    PrivacyPolicyComponent,
    TermsOfUseComponent,
    ContactFormComponent,
    LenderComponent,
    BorrowerComponent,
    AuthComponent,
    SubscribeComponent,

   
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    UserModule,
    ReturnModule,
    ReservationModule,
    ReservationRequestModule,
    //Ajout des modules ci-dessous pour contact-form
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
 
   

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
