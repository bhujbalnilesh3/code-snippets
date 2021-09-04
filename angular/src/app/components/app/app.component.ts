import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  centered  = true;
  unbounded = true;
  technologies:any = [];
  
  constructor(private category: CategoryService) {}

  ngOnInit() {
    this.category.getCategories().subscribe((data:any) => {
      this.technologies = data.map((d:any) => d.name);
    })
  }
}
