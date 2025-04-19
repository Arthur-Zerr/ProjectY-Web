import { EYUserProfileSettingType } from "../../enums/EYUserProfileSettingType.enum";

export class ProfilePictureMetaDataForReturnDto {
  public profilePictureId: string;
  public uploadDate: Date;

  constructor(profilePictureId: string, uploadDate: Date) {
    this.profilePictureId = profilePictureId;
    this.uploadDate = uploadDate;
  }
}

export class UserNameForUpdateDto {
  public YUserId: string;
  public UserName: string;

  constructor(yUserId: string, userName: string) {
    this.YUserId = yUserId;
    this.UserName = userName;
  }
}

export class YUserProfileSettingsForCreateDto {
  public SettingsType: EYUserProfileSettingType;
  public Value: string;

  constructor(settingsType: EYUserProfileSettingType, value: string) {
    this.SettingsType = settingsType;
    this.Value = value;
  }
}

export class YUserProfileSettingsForReturnDto {
  public id: number;
  public settingsType: EYUserProfileSettingType;
  public value: string;

  constructor(id: number, settingsType: EYUserProfileSettingType, value: string) {
    this.id = id;
    this.settingsType = settingsType;
    this.value = value;
  }
}

