import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileComponent } from "./profile.component";
import { ProfileViewComponent } from "./views/profile-view/profile-View.component";
import { RouterModule, RouterOutlet, Routes } from "@angular/router";
import { ContentModule } from "../content/content.module";


const routes: Routes = [
  {
    path: "profile",
    component: ProfileComponent,
    // canActivate: [AuthGuard],
    children: [
      {path: "", component: ProfileViewComponent},
    ]
  }
];

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileViewComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    RouterOutlet,
    ContentModule
  ]
})
export class ProfileModule {
}
