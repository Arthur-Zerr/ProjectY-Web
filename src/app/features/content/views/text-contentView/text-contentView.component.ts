import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "y-text-contentView",
  templateUrl: "./text-contentView.component.html",
  styleUrl: "./text-contentView.component.scss"
})
export class TextContentViewComponent {
  @Output() closeView: EventEmitter<any> = new EventEmitter<any>();

}
