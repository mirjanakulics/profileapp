import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from "../profile-service.service";

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {

  constructor(private service: ProfileServiceService) { }

  ngOnInit() {
  }

  setUserProfile(form) {
    this.service.setUserProfile(
      {
        name: form.value.name,
        contact: form.value.contact,
        bio: form.value.bio
      }
    )
  };

  

}
