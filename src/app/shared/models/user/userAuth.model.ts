export class UserLoginDto {
  public Username: string;
  public Password: string;

  constructor(username: string, password: string) {
    this.Username = username;
    this.Password = password;
  }
}

export class UserLoginForReturnDto {
  public token: string;
  public expires: Date;

  constructor(token: string, expires: Date) {
    this.token = token;
    this.expires = expires;
  }
}
