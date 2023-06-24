import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
 constructor(private _health:NewsapiserviceService) {}

 healthNewsDisplay : any = [];

 ngOnInit(): void {
  this._health.healthNews().subscribe(
    (result) => {
      this.healthNewsDisplay = result.articles;
    }
  )
}

}
