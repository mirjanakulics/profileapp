import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from "../profile-service.service";

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponentComponent implements OnInit {

  profile: any;

  constructor(private profileServiceService: ProfileServiceService) { }

  ngOnInit() {
    this.profile = this.profileServiceService.getUserProfile();
  }

  editProfile() {
    this.profileServiceService.editProfile();
  }

  
}
