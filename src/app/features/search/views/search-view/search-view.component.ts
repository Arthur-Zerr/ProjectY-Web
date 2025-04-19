import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "y-search-view",
  templateUrl: "./search-view.component.html",
  styleUrl: "./search-view.component.scss"
})
export class SearchViewComponent implements OnInit, OnDestroy {

  search_query = "";
  queryParamsReceive: Subscription;

  constructor(private route: ActivatedRoute) {
    this.queryParamsReceive = this.route.queryParams
      .subscribe(params => {
          this.search_query = params['q'];
        }
      );
  }


  ngOnInit(): void {
    console.log(this.search_query);
  }


  ngOnDestroy(): void {
    this.queryParamsReceive.unsubscribe();
  }
}
