import { Component } from "@angular/core";
import { NgIf, NgOptimizedImage } from "@angular/common";

@Component({
  selector: "y-loading-Page",
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: "./loading-Page.component.html",
  styleUrl: "./loading-Page.component.scss"
})
export class LoadingPageComponent {

}
