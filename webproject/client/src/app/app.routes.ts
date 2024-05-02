import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ShoppingCartPageComponent } from './shopping-cart-page/shopping-cart-page.component';
import { LoginComponent } from './login/login.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';

export const routes: Routes = [
    {path: '',component: MainPageComponent},
    {path:'details/:productName/:productID',component:ProductPageComponent},
    {path:'cart',component:ShoppingCartPageComponent},
    {path:'login', component:LoginComponent},
    {path:'profile',component:UserProfilePageComponent}
];
