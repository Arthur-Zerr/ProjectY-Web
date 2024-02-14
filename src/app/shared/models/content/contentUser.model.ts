export class ContentLoginDto {
  public Username: string;
  public AtUsername: string;

  constructor(username: string, atUsername: string) {
    this.Username = username;
    this.AtUsername = atUsername;
  }
}

export class YUserContent {
  public id: string;
  public username: string;
  public atUsername: string;
  public useGradient: boolean;
  public useColor: boolean;
  public profileColor: string;

  constructor(id: string, username: string, atUsername: string, useGradinet: boolean, useColor: boolean, profileColor: string) {
    this.id = id;
    this.username = username;
    this.atUsername = atUsername;
    this.useGradient = useGradinet;
    this.useColor = useColor;
    this.profileColor = profileColor;
  }
}

export class YUserContentFlags {
  public isGuest: boolean;
  public isConfirmed: boolean;

  constructor(isGuest: boolean, isConfirmed: boolean) {
    this.isGuest = isGuest;
    this.isConfirmed = isConfirmed;
  }
}

export class ContentLoginReturnDto {
  public token: string;
  public yUSer: YUserContent;
  public yUserFlags: YUserContentFlags;
  public expires: Date;

  constructor(token: string, yUSer: YUserContent, yUserFlags: YUserContentFlags, expires: Date) {
    this.token = token;
    this.yUSer = yUSer;
    this.yUserFlags = yUserFlags;
    this.expires = expires;
  }
}

