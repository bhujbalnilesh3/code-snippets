import { Component, OnInit } from '@angular/core';
import { SharedataService } from 'src/app/services/sharedata.service';

@Component({
  selector: 'cheet-home',
  templateUrl: './cheet-home.component.html',
  styleUrls: ['./cheet-home.component.css']
})
export class CheetHomeComponent implements OnInit {
  category: any = '';
  constructor(private data: SharedataService) { }

  ngOnInit(): void {
    this.data.categoryData.subscribe(data => {
      this.category  = data;
    });
  }
}
