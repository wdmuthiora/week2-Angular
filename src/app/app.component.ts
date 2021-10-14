import { Component } from '@angular/core';
import { GitHubService } from './services/git-hub.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GITHUB SEARCH';
  users!: String[];
  constructor(private githubService: GitHubService) {}
  getUsers() {

  }
}
