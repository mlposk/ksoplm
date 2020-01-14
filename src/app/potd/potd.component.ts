import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-potd',
  templateUrl: './potd.component.html',
  styleUrls: ['./potd.component.css']
})
export class PotdComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  response;
  title = 'mlposk';

  showPicture() {
    this.apiService.getPic()
      .subscribe(data => {
        this.response = data;
        console.log(this.response);
      });
  }

  ngOnInit() {
    this.showPicture();
  }
}
