import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { BaseWidgetComponent } from "./shared/components/base/base-widget/base-widget.component";
import { TabbarWidgetComponent } from "./shared/components/tabbar-Widget/tabbar-Widget.component";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, BaseWidgetComponent, TabbarWidgetComponent, HttpClientModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss"
})
export class AppComponent {
  title = "ProjectY";
}
