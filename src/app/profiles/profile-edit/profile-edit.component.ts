import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  id: number;
  editMode = false;
  profileForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private profileService: ProfileService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    if (this.editMode) {
      this.profileService.updateProfile(this.id, this.profileForm.value);
    } else {
      this.profileService.addProfile(this.profileForm.value);
    }
    this.onCancel();
  }


  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let profileFirstName = '';
    let profileLastName = '';
    let profileReview = '';

    if (this.editMode) {
      const profile = this.profileService.getProfile(this.id);
      profileFirstName = profile.firstName;
      profileLastName = profile.lastName;
      profileReview = profile.review;
    }

    this.profileForm = new FormGroup({
      'firstName': new FormControl(profileFirstName, Validators.required),
      'lastName': new FormControl(profileLastName, Validators.required),
      'review': new FormControl(profileReview, Validators.required)
    });
  }

}
