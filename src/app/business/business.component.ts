import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private _business: NewsapiserviceService) {}
  businessNewsDisplay : any = [];

  ngOnInit(): void {
    this._business.businessNews().subscribe(
      (result) => {
        this.businessNewsDisplay = result.articles;
      }
    );
  }

}
