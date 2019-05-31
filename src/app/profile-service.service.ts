import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  profile: any =
    {
      name: "Mirjana Kulics",
      contact: "mirjana@grandcircus.co",
      bio: "I like coding. I don't have a life or workout anymore because coding is my life 24/7."
    };

  constructor(private router: Router) { }
  
  setUserProfile(updatedProfile): any {
    this.profile = { ...updatedProfile };
 
    this.router.navigate(["/profile"]);
 
    return this.profile;
  }
 
  editProfile(): void {
    this.router.navigate(["/edit"]);
  }

  updateProfile(updateProfile: any): void {
    this.profile = {...this.updateProfile};
    this.router.navigate(['/profile']);
  }

  getUserProfile() {
    return this.profile;
  }
  
  // setUserProfile(newProfile) {
  //   console.log(newProfile)
  //   this.profile = newProfile;
  // }

  // editProfile() {
  //   this.router.navigate(["path-name"]);
  // }

}



