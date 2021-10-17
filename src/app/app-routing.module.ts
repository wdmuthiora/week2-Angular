import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsSectionComponent } from './results-section/results-section.component'
import { SearchFormComponent } from './search-form/search-form.component'
import { UserDetailsSectionComponent } from './user-details-section/user-details-section.component';




const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'results', component: ResultsSectionComponent },
  { path: 'search', component: SearchFormComponent },
  { path: 'user-details', component: UserDetailsSectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
