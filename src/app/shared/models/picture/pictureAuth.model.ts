export class PictureYUser {

}

export class PictureLoginDto {
  public Username: string;
  public AtUsername: string;

  constructor(Username: string, AtUsername: string) {
    this.Username = Username;
    this.AtUsername = AtUsername;
  }
}

export class LoginPictureReturnDto {
  public token: string;
  public yUser: PictureYUser;
  public expires: string;

  constructor(token: string, yUser: PictureYUser, expires: string) {
    this.token = token;
    this.yUser = yUser;
    this.expires = expires;
  }
}
