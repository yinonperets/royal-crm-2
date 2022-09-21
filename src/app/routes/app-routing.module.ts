import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from '../pages/about-page/about-page.component';
import { ContactsDetailsComponent } from '../pages/contacts/contacts-details-component/contacts-details.component';
import { ContactsPageComponent } from '../pages/contacts/contacts-page/contacts-page.component';
import { EditContactComponent } from '../pages/contacts/edit-contact-component/edit-contact.component';
import { NewContactComponent } from '../pages/contacts/new-contact-component/new-contact.component';
import { CustomerDetailsComponent } from '../pages/Customers/customer-details/customer-details.component';
import { CustomersPageComponent } from '../pages/Customers/customers-page/customers-page.component';
import { EditCustomerComponent } from '../pages/Customers/edit-customer/edit-customer.component';
import { NewCustomerComponent } from '../pages/Customers/new-customer/new-customer.component';
import { ErrorPageComponent } from '../pages/error-page/error-page.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { SignupPageComponent } from '../pages/users/signup-page/signup-page.component';
import { AuthGuard } from './auth.guard';
import { LoggedGuard } from './logged.guard';

const routes: Routes = [
  { path: '', component: LoginPageComponent, canActivate: [LoggedGuard] },
  { path: 'login', component: LoginPageComponent, canActivate: [LoggedGuard] },
  { path: 'customers', component: CustomersPageComponent,canActivate: [AuthGuard] },
  { path: 'customers/new-customer', component: NewCustomerComponent,canActivate: [AuthGuard] },
  { path: 'customers/edit-customer/:id', component: EditCustomerComponent,canActivate: [AuthGuard] },
  {
    path: 'customers/customer-details/:id',
    component: CustomerDetailsComponent,
    canActivate: [AuthGuard]
  },

  { path: 'contacts', component: ContactsPageComponent, canActivate: [AuthGuard] },
  { path: 'contacts/new-contact', component: NewContactComponent,canActivate: [AuthGuard] },
  { path: 'contacts/edit-contact/:id', component: EditContactComponent ,canActivate: [AuthGuard]},
  { path: 'contacts/contact-details/:id', component: ContactsDetailsComponent,canActivate: [AuthGuard] },

{ path: 'about', component: AboutPageComponent},

  { path: 'login', component: LoginPageComponent},
  {path: 'signup', component: SignupPageComponent, canActivate: [LoggedGuard]},
  // error page //
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
