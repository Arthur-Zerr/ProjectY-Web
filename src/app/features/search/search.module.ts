import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchComponent } from "./search.component";
import { SearchViewComponent } from "./views/search-view/search-view.component";
import { RouterModule, Routes } from "@angular/router";
import { ContentModule } from "../content/content.module";

const routes: Routes = [
  {
    path: "search",
    component: SearchComponent,
    // canActivate: [AuthGuard],
    children: [
      {path: "", component: SearchViewComponent},
    ]
  }
];


@NgModule({
  declarations: [
    SearchComponent,
    SearchViewComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ContentModule

  ]
})
export class SearchModule {
}
