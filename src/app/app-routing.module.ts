import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { ProductsComponent} from './components/products/products.component';
import { AboutUsComponent} from './components/about-us/about-us.component';
import { NavigationComponent} from './components/navigation/navigation.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';



const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'home', component:HomeComponent
      },
      {
        path: 'products', component:ProductsComponent
      },
      {
        path: 'about-us', component:AboutUsComponent
      },
      {
        path: 'product-details', component:ProductDetailsComponent
      },
      {
        path: 'shopping-cart', component:ShoppingCartComponent
      },
      {
        path: 'checkout', component:CheckoutComponent
      }
    ],
    component: NavigationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
