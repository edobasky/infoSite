import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessComponent } from './business/business.component';
import { HealthComponent } from './health/health.component';

const routes: Routes = [
  {path: "", component: TopheadingComponent},
  {path: "tech", component: TechnewsComponent},
  {path: "business", component: BusinessComponent},
  {path: "health", component: HealthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
