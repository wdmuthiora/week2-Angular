import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { ResultsSectionComponent } from './results-section/results-section.component';
import { UserDetailsSectionComponent } from './user-details-section/user-details-section.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HttpClientModule } from '@angular/common/http';
import { GitHubService } from './services/git-hub.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchSectionComponent,
    ResultsSectionComponent,
    UserDetailsSectionComponent,
    SearchFormComponent,
    LandingPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [GitHubService],
  bootstrap: [AppComponent],
})
export class AppModule {}
