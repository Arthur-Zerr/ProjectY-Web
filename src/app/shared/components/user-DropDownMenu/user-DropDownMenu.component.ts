import { Component } from "@angular/core";
import { NgIf, NgOptimizedImage } from "@angular/common";
import { ClickOutSideDirective } from "../../../core/directives/clickOutSide.directive";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "y-user-DropDownMenu",
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf,
    ClickOutSideDirective
  ],
  templateUrl: "./user-DropDownMenu.component.html",
  styleUrl: "./user-DropDownMenu.component.scss"
})
export class UserDropDownMenuComponent {

  isOpen = false;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  toggleDropDown() {
    this.isOpen = !this.isOpen;
  }

  redirectOnClick(url: string) {
    this.isOpen = false;
    this.router.navigate([url]).catch(() => {
    });
  }
}
