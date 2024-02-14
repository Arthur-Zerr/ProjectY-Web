import { EActivityType } from "../../enums/activityType.enum";
import { BaseContentDto } from "./content.model";

export class UserContentActivityForCreateDto {
  public BaseContentId: string;
  public ActivityType: EActivityType;

  constructor(baseContentId: string, activityType: EActivityType) {
    this.BaseContentId = baseContentId;
    this.ActivityType = activityType;
  }
}

export class UserContentActivityForReturnDto {
  public id: string;
  public activityType: number;
  public baseContentId: string;
  public baseContent: BaseContentDto;
  public date: Date;

  constructor(id: string, baseContentId: string, activityType: number, baseContent: BaseContentDto, date: Date) {
    this.id = id;
    this.baseContentId = baseContentId;
    this.activityType = activityType;
    this.baseContent = baseContent;
    this.date = date;
  }
}
