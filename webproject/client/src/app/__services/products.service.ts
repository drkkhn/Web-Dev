import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
	private apiURL = "http://127.0.0.1:8000/api/";

	constructor(private http: HttpClient) {}
  

  getProducts_Tops(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}tops/`);
  }
  getProducts_Shoes(): Observable<any>{
    return this.http.get<any>(`${this.apiURL}shoes/`)
  }
  getProducts_Pants(): Observable<any>{
    return this.http.get<any>(`${this.apiURL}pants/`)
  }
  getProducts_Hats(): Observable<any>{
    return this.http.get<any>(`${this.apiURL}hats/`)
  }
  getCategories(): Observable<any>{
    return this.http.get<any>(`${this.apiURL}categories`)
  }
  getSizes(): Observable<any>{
    return this.http.get<any>(`${this.apiURL}sizes/`)
  }

  onCreateNewProductSubmitTop(productForm: FormGroup): Observable<any> {
    const productData = productForm.value;
    return this.http.post(`${this.apiURL}tops/`, productData);
  }
  onCreateNewProductSubmitPants(productForm: FormGroup): Observable<any> {
    const productData = productForm.value;
    return this.http.post(`${this.apiURL}pants/`, productData);
  }
  onCreateNewProductSubmitShoes(productForm: FormGroup): Observable<any> {
    const productData = productForm.value;
    return this.http.post(`${this.apiURL}shoes/`, productData);
  }
  onCreateNewProductSubmitHats(productForm: FormGroup): Observable<any> {
    const productData = productForm.value;
    return this.http.post(`${this.apiURL}hats/`, productData);
  }

}
