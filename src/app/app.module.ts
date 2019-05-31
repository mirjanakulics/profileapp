import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { ProfileServiceService } from './profile-service.service';

const appRoutes: Routes = [
  { path: 'profile', component: ProfileComponentComponent },
  { path: 'edit', component: EditComponentComponent },
  {
    path: 'profile',
    component: ProfileComponentComponent,
    data: { title: 'Profile' }
  },
  { path: '',
    redirectTo: '/profile',
    pathMatch: 'full'
  },
  {
    path: 'edit',
    component: EditComponentComponent,
    data: { title: 'Edit' }
  },
  { path: '',
    redirectTo: '/edit',
    pathMatch: 'full'
  },
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponentComponent,
    EditComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProfileServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
