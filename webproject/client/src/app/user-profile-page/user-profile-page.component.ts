import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {ProductsService} from '../__services/products.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../__services/user.service';


@Component({
  selector: 'app-user-profile-page',
  standalone: true,
  imports: [NavBarComponent,CommonModule,ReactiveFormsModule],
  templateUrl: './user-profile-page.component.html',
  styleUrl: './user-profile-page.component.css'
})
export class UserProfilePageComponent {
  username: string | null = null;
  productForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    brand: ['', Validators.required],
    price: ['', Validators.required],
    image_url: [''], // Add validators if needed
    gender: ['', Validators.required],
    category: ['', Validators.required],
    sizes: [[]] // Assuming sizes is an array
  });;
  genders: any[] = [{id:0,name:"None"},{id:1,name:"Male"},{id:2,name:"Female"}];
  categories: any[] = []; 
  availableSizes: any[] = [];
  selectedProduct: string = 'hats';

  constructor(private fb: FormBuilder, private http: HttpClient,private ProductsService:ProductsService, private userService: UserService) {
    this.username = this.userService.getUsername();
    console.log(this.username);
   }

  ngOnInit(): void {
    this.ProductsService.getCategories().subscribe(data=>{
      this.categories = this.categories.concat(data);
    });
    this.ProductsService.getSizes().subscribe(data=>{
      this.availableSizes = this.availableSizes.concat(data);
    });
  }
  onSelectProduct(productType: string): void {
    this.selectedProduct = productType;
    // You can optionally reset the form here
    
  }

  onSubmit(): void {
    console.log(this.productForm)
      const productData = this.productForm;
      console.log(productData);
      // this.productForm.reset();
      switch (this.selectedProduct) {
        case 'tops':
          this.ProductsService.onCreateNewProductSubmitTop(productData).subscribe(
            response => {
              console.log('Product created successfully:', response);
            },
            error => {
              console.error('Error creating product:', error);
            }
          );
          break;
        case 'pants':
          this.ProductsService.onCreateNewProductSubmitPants(productData).subscribe(
            response => {
              console.log('Product created successfully:', response);
            },
            error => {
              console.error('Error creating product:', error);
            }
          );          break;
        case 'shoes':
          this.ProductsService.onCreateNewProductSubmitShoes(productData).subscribe(
            response => {
              console.log('Product created successfully:', response);
            },
            error => {
              console.error('Error creating product:', error);
            }
          );          break;
        case 'hats':
          this.ProductsService.onCreateNewProductSubmitHats(productData).subscribe(
            response => {
              console.log('Product created successfully:', response);
            },
            error => {
              console.error('Error creating product:', error);
            }
          );          break;
        default:
          break;
      }
    
  }
}