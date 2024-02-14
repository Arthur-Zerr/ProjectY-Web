export class PictureReturnDto {
  public id: string;
  public rawPictureId: string;
  public compressedPictureId: string;

  constructor(id: string, rawPictureId: string, compressedPictureId: string) {
    this.id = id;
    this.rawPictureId = rawPictureId;
    this.compressedPictureId = compressedPictureId;
  }
}


export class PictureDataDto {
  public id: string;
  public yUserId: string;
  public rawPictureId: string;
  public compressedPictureId: string;

  constructor(id: string, yUserID: string, rawPictureId: string, compressedPictureId: string) {
    this.id = id;
    this.yUserId = yUserID;
    this.rawPictureId = rawPictureId;
    this.compressedPictureId = compressedPictureId;
  }
}
