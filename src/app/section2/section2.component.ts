import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component implements OnInit {
  getHeaderData;
  message;
  constructor(private service:AppService) { }

  ngOnInit() {
    this.service.getHeaderData().subscribe( data => {
      this.getHeaderData=data; 
      console.log(this.getHeaderData);
    }, error => {this.message=error;});  

  }

}
