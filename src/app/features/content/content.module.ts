import { NgModule } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { BaseWidgetComponent } from "../../shared/components/base/base-widget/base-widget.component";
import { TextContentComponent } from "./components/text-Content/text-Content.component";
import {
  PictureContentComponent
} from "./components/picture-Content/picture-Content.component";
import { ContentCommentComponent } from "./components/content-Comment/content-Comment.component";
import { CommentContentListComponent } from "./components/content-CommentList/comment-ContentList.component";
import { PictureContentViewComponent } from "./views/picture-contentView/picture-contentView.component";
import { TextContentViewComponent } from "./views/text-contentView/text-contentView.component";
import { ContentDescriptionComponent } from "./components/content-Description/content-Description.component";
import { VideoContentViewComponent } from "./views/video-contentView/video-contentView.component";
import { VgCoreModule } from "@videogular/ngx-videogular/core";
import { VgControlsModule } from "@videogular/ngx-videogular/controls";
import { VgOverlayPlayModule } from "@videogular/ngx-videogular/overlay-play";
import { VgBufferingModule } from "@videogular/ngx-videogular/buffering";
import { ContentUserInfoComponent } from "./components/content-UserInfo/content-UserInfo.component";
import { RouterLink, RouterOutlet } from "@angular/router";
import { ClickOutSideDirective } from "../../core/directives/clickOutSide.directive";
import { VideoContentComponent } from "./components/video-Content/video-Content.component";

@NgModule({
  declarations: [
    TextContentComponent,
    PictureContentComponent,
    ContentCommentComponent,
    ContentDescriptionComponent,
    CommentContentListComponent,
    PictureContentViewComponent,
    VideoContentViewComponent,
    TextContentViewComponent,
    ContentUserInfoComponent,
    VideoContentComponent
  ],
  exports: [
    TextContentComponent,
    PictureContentComponent,
    VideoContentComponent,
    CommentContentListComponent,
    PictureContentViewComponent,
    TextContentViewComponent,
    VideoContentViewComponent
  ],
  imports: [
    CommonModule,
    BaseWidgetComponent,
    NgOptimizedImage,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    RouterOutlet,
    RouterLink,
    ClickOutSideDirective
  ],
})
export class ContentModule {
}
