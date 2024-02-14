import { EContentType } from "../../enums/contentType.enum";
import { EVisibilityType } from "../../enums/visibilityType.enum";
import { YUserContent } from "./contentUser.model";

export class ContentForCreateDto {
  public Header: string;
  public ChildId: string;
  public Location: string;
  public ContentType: EContentType;
  public VisibilityType: EVisibilityType;
  public ContentTags: string[];

  constructor(header: string, childId: string, location: string, contentType: EContentType, visibilityType: EVisibilityType,
              contentTags: string[]) {
    this.Header = header;
    this.ChildId = childId;
    this.Location = location;
    this.ContentType = contentType;
    this.VisibilityType = visibilityType;
    this.ContentTags = contentTags;
  }
}

export class BaseContentDto {
  public id: string;
  public childId: string;
  public header: string;
  public location: string;
  public contentType: EContentType;
  public uploadDate: Date;
  public userForReturnDto: YUserContent;

  constructor(id: string, header: string, childId: string, location: string, contentType: EContentType,
              uploadDate: Date, userForReturnDto: YUserContent) {
    this.id = id;
    this.header = header;
    this.childId = childId;
    this.location = location;
    this.contentType = contentType;
    this.uploadDate = uploadDate;
    this.userForReturnDto = userForReturnDto;
  }
}

