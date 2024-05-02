import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ShopFeedComponent } from '../shop-feed/shop-feed.component';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ProductsService} from '../__services/products.service';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [NavBarComponent,ShopFeedComponent,FontAwesomeModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  faCircleUser = faCircleUser;
  productName: string = '';
  productId: number = 0;
  product: any;

  productsList:any[] = [];
	constructor(private ProductsService:ProductsService ,private route: ActivatedRoute,){}

  ngOnInit() {
    const getProductsObservableArray = [
      this.ProductsService.getProducts_Tops(),
      this.ProductsService.getProducts_Shoes(),
      this.ProductsService.getProducts_Hats(),
      this.ProductsService.getProducts_Pants()
    ];
  
    // Combine multiple observables into a single observable
    forkJoin(getProductsObservableArray).subscribe(productsArrays => {
      // Concatenate all product arrays into a single array
      this.productsList = productsArrays.reduce((acc, curr) => acc.concat(curr), []);
      
      // Now, subscribe to route params and find the product
      this.route.params.subscribe(params => {
        this.productName = params['productName'];
        this.productId = params['productID']; // Convert to number
  
        console.log(this.productName);
        console.log(this.productId);
        console.log(this.productsList);
        // Find product by name and ID
        this.product = this.findProductByNameAndId(this.productName, this.productId);
  
        console.log(this.product);
      });
    });
  }



  findProductByNameAndId(productName: string, productId: number): any {

    return this.productsList.find(product => product.name == productName && product.id == productId);
}

}
