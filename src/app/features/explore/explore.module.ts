import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ExploreComponent } from "./explore.component";
import { ContentModule } from "../content/content.module";
import { ExploreViewComponent } from "./views/explore-view/explore-view.component";

const routes: Routes = [
  {
    path: "explore",
    component: ExploreComponent,
    // canActivate: [AuthGuard],
    children: [
      {path: "", component: ExploreViewComponent},
    ]
  }
];

@NgModule({
  declarations: [
    ExploreComponent,
    ExploreViewComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ContentModule
  ]
})
export class ExploreModule {
}
