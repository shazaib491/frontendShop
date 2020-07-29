import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShopComponent } from './shop/shop.component';
import { BackFormComponent } from './back-form/back-form.component';
import {BackUComponent} from './back-u/back-u.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "header", component: HeaderComponent },
  { path: "footer,", component: FooterComponent },
  {path:"shop",component:ShopComponent},
  {path:"back",component:BackFormComponent},
  {path:"update/:id",component:BackUComponent},
  {path:"contacts",component:ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
