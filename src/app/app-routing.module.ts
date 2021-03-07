import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { BorrowerComponent } from './components/borrower/borrower.component';
import { HomeComponent } from './components/home/home.component';
import { LenderComponent } from './components/lender/lender.component';
import { ContactFormComponent } from './footerFiles/contact-form/contact-form.component';
import { AuthGuard } from './guard/auth.guard';
import { LeaveGuard } from './guard/leave.guard';
import { HeaderComponent } from './header/header.component';
import { HelpComponent } from './footerFiles/help/help.component';
import { PrivacyPolicyComponent } from './footerFiles/privacy-policy/privacy-policy.component';
import { SubscribeComponent } from './backup/subscribe/subscribe.component';
import { TermsOfUseComponent } from './footerFiles/terms-of-use/terms-of-use.component';
import { UploadImgComponent } from './upload-img/upload-img.component';
import { BookingAddComponent } from './booking-add/booking-add.component';
import { BookingComponent } from './booking/booking.component';
import { LoanComponent } from './loan/loan.component';
import { ReturnComponent } from './return/return.component';


const routes: Routes = [

  
  { path: 'header', component: HeaderComponent},
  { path: 'home', component: HomeComponent},
  { path: 'lender', component: LenderComponent, canActivate: [AuthGuard]},
  { path: 'borrower', component: BorrowerComponent},
  { path: 'subscribe', component: SubscribeComponent},
  { path: 'help', component: HelpComponent},
  { path: 'contact-form', component: ContactFormComponent},
  { path: 'terms-of-use', component: TermsOfUseComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
  { path: 'photos', component: UploadImgComponent},
  { path: 'booking-add', component: BookingAddComponent},
  { path: 'booking', component: BookingComponent},
  { path: 'loan', component: LoanComponent},
  { path: 'return', component: ReturnComponent},



//Lazing loading pour les modules "product" et "user"
  
  { path: 'user', loadChildren: './user/user.module#UserModule'},
  { path: 'product', loadChildren: './product/product.module#ProductModule'},
  { path: '', pathMatch:'full', redirectTo: '/home'},

  { path: 'auth', component: AuthComponent},
  { path: '**', component: HomeComponent }
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
