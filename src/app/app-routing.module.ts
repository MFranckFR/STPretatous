import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { BorrowerComponent } from './components/borrower/borrower.component';
import { HomeComponent } from './components/home/home.component';
import { LenderComponent } from './components/lender/lender.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AuthGuard } from './guard/auth.guard';
import { LeaveGuard } from './guard/leave.guard';
import { HelpComponent } from './help/help.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SigninComponent } from './signin/signin.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';





const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'lender', component: LenderComponent, canActivate: [AuthGuard]},
  { path: 'borrower', component: BorrowerComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'subscribe', component: SubscribeComponent, canDeactivate : [LeaveGuard]},
  { path: 'help', component: HelpComponent},
  { path: 'contact-form', component: ContactFormComponent},
  { path: 'terms-of-use', component: TermsOfUseComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
  { path: 'product', loadChildren: './product/product.module#ProductModule'},
  { path: '', pathMatch:'full', redirectTo: 'home'},

  { path: 'auth', component: AuthComponent},
  //{ path: '**', component: HomeComponent }
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
