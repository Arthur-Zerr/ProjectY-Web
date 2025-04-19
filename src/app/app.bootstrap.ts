import { AuthApiService } from "./shared/services/auth/auth-api.service";
import { ContentAuthAPIService } from "./shared/services/content/content-AuthAPI.service";
import { PictureAuthAPIService } from "./shared/services/picture/picture-AuthAPI.service";
import { LocalStorageService } from "./shared/services/localStorage.service";
import { UserService } from "./shared/services/user/user.service";
import { AuthLoginReturnDto, DeviceInfoDto, GuestLoginDto } from "./shared/models/authAPI.model";
import { LocalStorageKeys } from "./data/localStorageKeys";
import { ContentLoginDto, ContentLoginReturnDto } from "./shared/models/content/contentUser.model";
import { PictureLoginDto, PictureLoginReturnDto } from "./shared/models/picture/pictureAuth.model";
import { EDeviceType } from "./shared/enums/deviceType.enum";
import { UserLoginForReturnDto } from "./shared/models/user/userAuth.model";

export class AppBootstrap {

  constructor(private authService: AuthApiService, private contentAuthService: ContentAuthAPIService,
              private pictureAuthService: PictureAuthAPIService, private localStorageService: LocalStorageService,
              private userService: UserService) {
  }

  async autoLoginGuest() {
    let loadedGuestUser = this.localStorageService.get<AuthLoginReturnDto>(LocalStorageKeys.AuthGuestUserKey);
    const loadedContentUser = this.localStorageService.get<ContentLoginReturnDto>(LocalStorageKeys.ContentUserKey);
    const loadedPictureUser = this.localStorageService.get<PictureLoginReturnDto>(LocalStorageKeys.PictureUserKey);
    const loadedUser = this.localStorageService.get<UserLoginForReturnDto>(LocalStorageKeys.UserKey);

    if (!loadedGuestUser) {
      this.localStorageService.clear();

      const loginDto = new GuestLoginDto("", new DeviceInfoDto("Web", EDeviceType.Web));
      const response = await this.authService.loginGuest(loginDto);
      if (response.success) {
        loadedGuestUser = response.data;
      }
    }
    this.userService.yUser.next(loadedGuestUser);
    if (!loadedContentUser) {
      await this.handleContentLogin(loadedGuestUser);
    } else {
      this.userService.yContentUser.next(loadedContentUser);
    }

    if (!loadedPictureUser) {
      await this.handlePictureLogin(loadedGuestUser);
    } else {
      this.userService.yPictureUser.next(loadedPictureUser);
    }
  }

  async autoLoginUser() {
    const loadedUser = this.localStorageService.get<AuthLoginReturnDto>(LocalStorageKeys.AuthUserKey);
    if (loadedUser) {

    }
  }

  private async handleContentLogin(authLogin: AuthLoginReturnDto | null) {
    if (authLogin === null)
      return;
    const loginDto = new ContentLoginDto(authLogin.yUser.username, authLogin.yUser.atUsername);
    const response = await this.contentAuthService.login(loginDto);
    if (response.success) {
      this.userService.yContentUser.next(response.data);
    }
  }

  private async handlePictureLogin(authLogin: AuthLoginReturnDto | null) {
    if (authLogin === null)
      return;
    const loginDto = new PictureLoginDto(authLogin.yUser.username, authLogin.yUser.atUsername);
    const response = await this.pictureAuthService.login(loginDto, authLogin.token);
    if (response.success) {
      this.userService.yPictureUser.next(response.data);
    }
  }
}
