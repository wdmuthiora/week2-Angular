import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../services/git-hub.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  users!: string[];
  profile!: any[];

  constructor(private profileService: GitHubService) {
    //when this class is called, call the profileService, and use the getProfileInfor service to return the profile
    this.profileService.getData().subscribe((profile) => {
      console.log(profile);
      this.profile = profile;
    });
  }

  ngOnInit(): void {}
}
