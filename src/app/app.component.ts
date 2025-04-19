import { APP_INITIALIZER, Component } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import {
  ActivatedRoute,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet
} from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { AuthApiService } from "./shared/services/auth/auth-api.service";
import { ContentAuthAPIService } from "./shared/services/content/content-AuthAPI.service";
import { PictureAuthAPIService } from "./shared/services/picture/picture-AuthAPI.service";
import { LocalStorageService } from "./shared/services/localStorage.service";
import { UserService } from "./shared/services/user/user.service";
import { LocalStorageKeys } from "./data/localStorageKeys";
import { AppBootstrap } from "./app.bootstrap";
import { YouModule } from "./features/you/you.module";
import { SidebarWidgetComponent } from "./shared/components/sidebar-Widget/sidebar-Widget.component";
import { UserDropDownMenuComponent } from "./shared/components/user-DropDownMenu/user-DropDownMenu.component";
import { LoadingPageComponent } from "./shared/components/loading-Page/loading-Page.component";
import { ContentModule } from "./features/content/content.module";
import { ClickOutSideDirective } from "./core/directives/clickOutSide.directive";
import { TabbarWidgetComponent } from "./shared/components/tabbar-Widget/tabbar-Widget.component";

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function initApp(authService: AuthApiService, contentAuthService: ContentAuthAPIService,
                        pictureAuthService: PictureAuthAPIService, localStorageService: LocalStorageService,
                        userService: UserService): Promise<any> {
  console.log("App initializing...");

  return new Promise((resolve, reject) => {
    console.log("App initializing...");

    const appBootstrap = new AppBootstrap(authService, contentAuthService, pictureAuthService, localStorageService, userService);

    const isUser = localStorageService.get<boolean>(LocalStorageKeys.IsUserKey) ?? false;
    if (isUser) {
      appBootstrap.autoLoginUser().catch(console.error);
    } else {
      appBootstrap.autoLoginGuest().catch(console.error);
    }

    resolve(appBootstrap);
  });
}


@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NgOptimizedImage,
    HttpClientModule,
    YouModule,
    SidebarWidgetComponent,
    UserDropDownMenuComponent,
    LoadingPageComponent,
    ContentModule,
    ClickOutSideDirective,
    TabbarWidgetComponent
  ],
  templateUrl: "./app.component.html",
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: initApp,
      deps: [
        AuthApiService, ContentAuthAPIService, PictureAuthAPIService, LocalStorageService, UserService
      ]
    }
  ],
  styleUrl: "./app.component.scss"
})
export class AppComponent {
  routeLoading = false;

  showBlackOverlay = false;

  showPictureView = false;
  showVideoView = false;
  showTextView = false;

  constructor(public router: Router, public route: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.routeLoading = true;
          console.log(this.routeLoading);
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.routeLoading = false;
          console.log(this.routeLoading);
          break;
        }
        default: {
          break;
        }
      }
    });

    // TODO: Maybe find a better way, maybe a component factory to allow nested views
    this.route.queryParams.subscribe(param => {
      console.log(param);
      // eslint-disable-next-line dot-notation
      if (param["picture"] !== undefined) {
        this.showPictureView = true;
        this.showBlackOverlay = true;
      }
      // eslint-disable-next-line dot-notation
      else if (param["video"] !== undefined) {
        this.showVideoView = true;
        this.showBlackOverlay = true;
      }
      // eslint-disable-next-line dot-notation
      else if (param["text"] !== undefined) {
        this.showTextView = true;
        this.showBlackOverlay = true;
      }
    });
  }

  closeAllViews() {
    // this.router.navigate([], {
    //   queryParams: {
    //     picture: null,
    //     text: null,
    //     video: null,
    //   },
    //   queryParamsHandling: "merge"
    // }).catch(console.error);

    this.showPictureView = false;
    this.showVideoView = false;
    this.showTextView = false;
    this.showBlackOverlay = false;
  }
}
