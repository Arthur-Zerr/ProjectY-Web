import {NgModule} from "@angular/core";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {BaseContentComponentComponent} from "./components/base-contentComponent/base-contentComponent.component";
import {BaseWidgetComponent} from "../../shared/components/base/base-widget/base-widget.component";
import {TextContentComponentComponent} from "./components/text-contentComponent/text-contentComponent.component";
import {
  PictureContentComponentComponent
} from "./components/picture-contentComponent/picture-contentComponent.component";


@NgModule({
  declarations: [
    BaseContentComponentComponent,
    TextContentComponentComponent,
    PictureContentComponentComponent
  ],
  exports: [
    BaseContentComponentComponent,
    TextContentComponentComponent,
    PictureContentComponentComponent
  ],
  imports: [
    CommonModule,
    BaseWidgetComponent,
    NgOptimizedImage
  ],
})
export class ContentModule {
}
