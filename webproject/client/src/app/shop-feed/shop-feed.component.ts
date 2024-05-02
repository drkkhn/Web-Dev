import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import {ProductsService} from '../__services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-feed',
  standalone: true,
  imports: [CommonModule,NavBarComponent],
  templateUrl: './shop-feed.component.html',
  styleUrl: './shop-feed.component.css'
})
export class ShopFeedComponent {

	constructor(private ProductsService:ProductsService , private router: Router ){}

	productsList:any[] = [];
	shuffledList:any[] = [];

	ngOnInit() {
		this.ProductsService.getProducts_Tops().subscribe(
			data => {
				this.productsList = this.productsList.concat(data);
			}
		);
	
		this.ProductsService.getProducts_Shoes().subscribe(
			data => {
				this.productsList = this.productsList.concat(data);
			}
		);
		this.ProductsService.getProducts_Hats().subscribe(
			data => {
				this.productsList = this.productsList.concat(data);
			}
		);
		this.ProductsService.getProducts_Pants().subscribe(
			data => {
				this.productsList = this.productsList.concat(data);
			}
		);


		this.ProductsService.getCategories().subscribe(
			data => {
			}
		);


		this.shuffledList = this.shuffleArray(this.productsList);
		this.calculateColumns();
	}
	

	
  columns: number = 1;
  div_width:number = 600;
  img_width:number = 270;


	@HostListener('window:resize', ['$event'])
	onResize() {
		this.calculateColumns();
	}
	calculateColumns() {
		const containerWidth = document.querySelector('.container')?.clientWidth;

		if (containerWidth) {
			this.columns = Math.floor(containerWidth / this.img_width);
		}
		this.div_width = this.columns * this.img_width;
	}


	shuffleArray<T>(array: T[]): T[] {
		const length = array.length;
		for (let i = length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}
	  
	redirectToProduct(productName: string, productId: number) {
		// Replace spaces in product name with dashes and navigate to the product detail page
		this.router.navigate(['/details', productName, productId]);
	}
}
