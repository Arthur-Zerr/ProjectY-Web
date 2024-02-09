import { NgModule } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { YouComponent } from "./you.component";
import { RouterModule, RouterOutlet, Routes } from "@angular/router";
import { YouFeedViewComponent } from "./views/you-FeedView/you-FeedView.component";
import { BaseWidgetComponent } from "../../shared/components/base-widget/base-widget.component";
import { TabbarWidgetComponent } from "../../shared/components/tabbar-Widget/tabbar-Widget.component";
import { YouSearchBarComponent } from "./components/you-SearchBar/you-SearchBar.component";
import { YouTagsBarComponent } from "./components/you-TagsBar/you-TagsBar.component";


const routes: Routes = [
  {
    path: "",
    component: YouComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: "you", component: YouFeedViewComponent
      },]
  }
];


@NgModule({
  declarations: [
    YouComponent,
    YouFeedViewComponent,
    YouSearchBarComponent,
    YouTagsBarComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    RouterOutlet,
    BaseWidgetComponent,
    TabbarWidgetComponent,
    NgOptimizedImage
  ]
})
export class YouModule {
}
