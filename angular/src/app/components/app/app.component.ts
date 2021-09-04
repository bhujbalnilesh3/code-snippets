import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { SharedataService } from 'src/app/services/sharedata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  centered  = true;
  unbounded = true;
  
  categories: any = [];
  selectedCategory: any = {};

  getSelectedCat(cat:any) {
    this.selectedCategory = cat;
    this.data.changeCategoryData(this.selectedCategory);
  }

  constructor(private category: CategoryService, private data: SharedataService) {}

  ngOnInit() {
    this.category.getCategories().subscribe((data:any) => {
      this.categories = data;
    })
  }
}
