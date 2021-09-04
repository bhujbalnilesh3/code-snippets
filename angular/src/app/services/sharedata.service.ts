import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedataService {
  private category = new BehaviorSubject<any>([]);
  categoryData = this.category.asObservable();
  constructor() { }

  changeCategoryData(newCategoryData: any) {
    this.category.next(newCategoryData);
  }
}
