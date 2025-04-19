import { EDeviceType } from "../enums/deviceType.enum";


export class YUser {
  public username: string;
  public atUsername: string;
  public email: string;

  constructor(username: string, atUsername: string, email: string) {
    this.username = username;
    this.atUsername = atUsername;
    this.email = email;
  }
}

export class YDeviceDto {
  public name: string;
  public type: number;
  public main: boolean;
  public created: Date; // Date
  public deleted: Date; // Date

  constructor(name: string, type: number, main: boolean, created: Date, deleted: Date) {
    this.name = name;
    this.type = type;
    this.main = main;
    this.created = created;
    this.deleted = deleted;
  }
}

export class DeviceInfoDto {
  public DeviceName: string;
  public DeviceType: EDeviceType;

  constructor(deviceName: string, deviceType: EDeviceType) {
    this.DeviceName = deviceName;
    this.DeviceType = deviceType;
  }
}

export class AuthLoginDto {
  public Email: string;
  public Password: string;
  public DeviceInfo: DeviceInfoDto;

  constructor(email: string, password: string, deviceInfo: DeviceInfoDto) {
    this.Email = email;
    this.Password = password;
    this.DeviceInfo = deviceInfo;
  }
}

export class AuthRegisterDto {
  public Username: string;
  public AtUsername: string;
  public Email: string;
  public Password: string;
  public ConfirmPassword: string;
  public DeviceInfo: DeviceInfoDto;

  constructor(username: string, atUsername: string, email: string, password: string, confirmPassword: string, deviceInfo: DeviceInfoDto) {
    this.Username = username;
    this.AtUsername = atUsername;
    this.Email = email;
    this.Password = password;
    this.ConfirmPassword = confirmPassword;
    this.DeviceInfo = deviceInfo;
  }
}

export class GuestLoginDto {
  public deviceId: string;
  public deviceInfo: DeviceInfoDto;

  constructor(deviceId: string, deviceInfo: DeviceInfoDto) {
    this.deviceId = deviceId;
    this.deviceInfo = deviceInfo;
  }
}

export class AuthLoginReturnDto {
  public token: string;
  public yUser: YUser;
  public expires: string;

  constructor(token: string, yUser: YUser, expires: string) {
    this.token = token;
    this.yUser = yUser;
    this.expires = expires;
  }
}
