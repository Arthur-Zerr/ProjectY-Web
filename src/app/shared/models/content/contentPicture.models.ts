export class PictureContentForCreateDto {
  public PictureId: string;
  public Body: string;

  constructor(pictureId: string, body: string) {
    this.PictureId = pictureId;
    this.Body = body;
  }
}

export class PictureContentForReturnDto {
  public id: string;
  public pictureId: string;
  public body: string;

  constructor(id: string, pictureId: string, body: string) {
    this.id = id;
    this.pictureId = pictureId;
    this.body = body;
  }
}
