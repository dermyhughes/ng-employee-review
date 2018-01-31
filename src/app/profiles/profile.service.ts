import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Profile } from './profile.model';

@Injectable()
export class ProfileService {
  profilesChanged = new Subject<Profile[]>(); // Dummy profile array
  private profiles: Profile[] = [
    new Profile(
      'Philip',
      'Fry',
      'Exhibits inability to conform to company priorities, insubordination, and an unexpected familiarity with the alphabet.'
    ),
    new Profile(
      'John',
      'Zoidberg',
      'Why not Zoidberg?',
      ),
    new Profile(
      'Turanga',
      'Leela',
      'Cyclops space captain.',
      )
  ];

  getProfiles() { // Grab all profiles
    return this.profiles.slice();
  }

  getProfile(index: number) { // Grab single profile from array id
    return this.profiles[index];
  }

  addProfile(profile: Profile) { // Add new profile to array
    this.profiles.push(profile);
    this.profilesChanged.next(this.profiles.slice());
  }

  updateProfile(index: number, newProfile: Profile) { // Edit existing profile
    this.profiles[index] = newProfile;
    this.profilesChanged.next(this.profiles.slice());
  }

  deleteProfile(index: number) { // Remove profile from array
    this.profiles.splice(index, 1);
    this.profilesChanged.next(this.profiles.slice());
  }
}
