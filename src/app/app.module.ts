import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileListComponent } from './profiles/profile-list/profile-list.component';
import { ProfileDetailComponent } from './profiles/profile-detail/profile-detail.component';
import { ProfileItemComponent } from './profiles/profile-list/profile-item/profile-item.component';
import { DropdownDirective } from './dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { ProfileStartComponent } from './profiles/profile-start/profile-start.component';
import { ProfileEditComponent } from './profiles/profile-edit/profile-edit.component';
import { ProfileService } from './profiles/profile.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfilesComponent,
    ProfileListComponent,
    ProfileDetailComponent,
    ProfileItemComponent,
    DropdownDirective,
    ProfileStartComponent,
    ProfileEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
