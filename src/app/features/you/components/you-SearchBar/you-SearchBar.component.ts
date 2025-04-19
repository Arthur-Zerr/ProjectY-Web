import { Component, ElementRef, OnDestroy, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "you-SearchBar",
  templateUrl: "./you-SearchBar.component.html",
  styleUrl: "./you-SearchBar.component.scss"
})
export class YouSearchBarComponent implements OnDestroy {
  @ViewChild("search_input") search_input!: ElementRef<HTMLInputElement>;

  isOpen = false;

  search_query = "";
  queryParamsReceive: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.queryParamsReceive = this.route.queryParams
      .subscribe(params => {
          if (params['q'] === undefined) {
          } else {
            this.search_query = params['q'];
          }
        }
      );
  }

  ngOnDestroy(): void {
    this.queryParamsReceive.unsubscribe();
  }

  openList() {
    this.isOpen = true;
  }

  closeList() {
    this.isOpen = false;
  }

  /*
  * Updates the list with suggestions
  */
  onSearchValueChange() {
    this.search_query = this.search_input.nativeElement.value;
    console.log(this.search_query);
  }

  /*
  * Submits the search and changes the view
  */
  onSearchSubmit() {
    if (this.search_query === "")
      return;
    this.router.navigate(["/search"], {queryParams: {q: this.search_query}}).catch(() => {
    });
    this.search_input.nativeElement.blur();
    this.isOpen = false;
  }
}
