import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  centered  = true;
  unbounded = true;
  technologies: string[] = [
    'Node', 
    'Python', 
    'AWS', 
    'Angular', 
    'MySQL', 
    'Mongo DB',
    'Shell Scripting',
    'Git' 
  ];
}
