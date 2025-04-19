import { Routes } from "@angular/router";

export const routes: Routes = [
  {path: "", loadChildren: () => import("./features/you/you.module").then(m => m.YouModule)},
  {path: "", loadChildren: () => import("./features/carousel/carousel.module").then(m => m.CarouselModule)},
  {path: "", loadChildren: () => import("./features/profile/profile.module").then(m => m.ProfileModule)},
  {path: "", loadChildren: () => import("./features/explore/explore.module").then(m => m.ExploreModule)},
  {path: "", loadChildren: () => import("./features/search/search.module").then(m => m.SearchModule)},
  {path: "", loadChildren: () => import("./features/content/content.module").then(m => m.ContentModule)},
  {path: "", redirectTo: "you", pathMatch: "full"},
  {path: "**", redirectTo: "you"},
];
