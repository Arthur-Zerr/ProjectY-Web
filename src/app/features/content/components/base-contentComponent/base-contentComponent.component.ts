import {Component, Input} from "@angular/core";

@Component({
  selector: "y-base-contentComponent",
  templateUrl: "./base-contentComponent.component.html",
  styleUrl: "./base-contentComponent.component.scss"
})
export class BaseContentComponentComponent {
  @Input() public hideHeader: boolean = false;

}
