import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  getCategories() {
    

    let url = 'http://localhost:8080/api/categories';
    return this.http.get(url);
  }
  
}
