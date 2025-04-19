import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarouselComponent } from "./carousel.component";
import { RouterModule, RouterOutlet, Routes } from "@angular/router";
import { CarouselViewComponent } from "./views/carousel-view/carousel-View.component";

const routes: Routes = [
  {
    path: "carousel",
    component: CarouselComponent,
    // canActivate: [AuthGuard],
  }
];

@NgModule({
  declarations: [
    CarouselComponent,
    CarouselViewComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    RouterOutlet,
  ]
})
export class CarouselModule {
}
