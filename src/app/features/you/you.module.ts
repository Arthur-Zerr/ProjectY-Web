import { NgModule } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { YouComponent } from "./you.component";
import { RouterModule, RouterOutlet, Routes } from "@angular/router";
import { YouFeedViewComponent } from "./views/you-FeedView/you-FeedView.component";
import { BaseWidgetComponent } from "../../shared/components/base/base-widget/base-widget.component";
import { TabbarWidgetComponent } from "../../shared/components/tabbar-Widget/tabbar-Widget.component";
import { YouSearchBarComponent } from "./components/you-SearchBar/you-SearchBar.component";
import { YouTagsBarComponent } from "./components/you-TagsBar/you-TagsBar.component";
import { ContentModule } from "../content/content.module";
import { YouTabBarComponent } from "./components/you-TabBar/you-TabBar.component";
import { ClickOutSideDirective } from "../../core/directives/clickOutSide.directive";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: "you",
    component: YouComponent,
    // canActivate: [AuthGuard],
    children: [
      {path: "", component: YouFeedViewComponent},
    ]
  },
  {path: "", redirectTo: "you", pathMatch: "full"}

];

@NgModule({
  declarations: [
    YouComponent,
    YouFeedViewComponent,
    YouSearchBarComponent,
    YouTagsBarComponent,
    YouTabBarComponent
  ],
  exports: [
    YouSearchBarComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    RouterOutlet,
    BaseWidgetComponent,
    TabbarWidgetComponent,
    NgOptimizedImage,
    ContentModule,
    ClickOutSideDirective,
    FormsModule
  ]
})
export class YouModule {
}
