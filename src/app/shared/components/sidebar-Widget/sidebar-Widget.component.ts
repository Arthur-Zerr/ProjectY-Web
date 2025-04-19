import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgClass, NgIf, NgOptimizedImage } from "@angular/common";
import { animate, style, transition, trigger } from "@angular/animations";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { SidebarModel } from "../../models/web/sidebar.model";
import { Subscription } from "rxjs";

@Component({
  selector: "y-sidebar-Widget",
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf,
    NgClass
  ],
  animations: [
    trigger(
      "inOutAnimation",
      [
        transition(
          ":enter",
          [
            style({width: 0, opacity: 0}),
            animate("0.2s ease-out",
              style({width: 80, opacity: 1}))
          ]
        ),
        transition(
          ":leave",
          [
            style({width: 80, opacity: 1}),
            animate("0.2s ease-in",
              style({width: 0, opacity: 0}))
          ]
        )
      ]
    )
  ],
  templateUrl: "./sidebar-Widget.component.html",
  styleUrl: "./sidebar-Widget.component.scss"
})
export class SidebarWidgetComponent implements OnInit, OnDestroy {
  isOpen = false;

  sideButtons: SidebarModel[] = [
    new SidebarModel("you", false),
    new SidebarModel("carousel", false),
    new SidebarModel("explore", false)
  ];

  routerEvent: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.routerEvent = router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.updateSideBarState(val.url);
      }
    });
  }

  ngOnInit() {
    this.updateSideBarState(this.router.url);
  }


  ngOnDestroy() {
    this.routerEvent.unsubscribe();
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  redirectOnClick(url: string) {
    this.router.navigate([url]).catch(() => {
    });
  }

  updateSideBarState(key: string) {
    let keys = key.split("/");

    if (keys[0] === "")
      keys = keys.slice(1);

    key = keys.pop() ?? "";

    this.sideButtons.filter(x => x.key !== key).forEach(x => x.Inactive());
    const activeIndex = this.sideButtons.findIndex(x => x.key === key);
    this.sideButtons[activeIndex]?.Active();
  }

  getState(key: string): boolean {
    const activeIndex = this.sideButtons.findIndex(x => x.key === key);
    return this.sideButtons[activeIndex]?.isActive;
  }
}
