import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', title: 'Inicio', component: HomeComponent },
  { path: 'product/:id', title: 'Detalle del Producto', component: ProductDetailComponent },
  { path: 'contact', title: 'Contacto', component: ContactFormComponent },
  { path: '**', component: PageNotFoundComponent },
];
