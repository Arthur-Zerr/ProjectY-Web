import {Routes} from "@angular/router";

export const routes: Routes = [
  {path: "", loadChildren: () => import("./features/you/you.module").then(m => m.YouModule)},
  {path: "**", redirectTo: "/you"},
  {path: "", redirectTo: "/you", pathMatch: "full"},
];
