export class TextContentForCreateDto {
  public Body: string;

  constructor(body: string) {
    this.Body = body;
  }
}

export class TextContentDto {
  public id: string;
  public body: string;

  constructor(id: string, body: string) {
    this.id = id;
    this.body = body;
  }
}
