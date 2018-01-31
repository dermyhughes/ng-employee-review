import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Profile } from '../profile.model';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit, OnDestroy {
  profiles: Profile[]; // Create array for profile data
  subscription: Subscription;

  constructor(private profileService: ProfileService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() { // Grab dummy profiles from profile.service and push to Profile array
    this.subscription = this.profileService.profilesChanged
      .subscribe(
        (profiles: Profile[]) => {
          this.profiles = profiles;
        }
      );
    this.profiles = this.profileService.getProfiles();
  }

  onNewProfile() {
    this.router.navigate(['new'], {relativeTo: this.route}); // Go to new profile page on click
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); // Cancel button
  }
}

