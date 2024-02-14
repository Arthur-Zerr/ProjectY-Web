import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { environment } from "../../../../environments/environment";
import { YResponse } from "../../models/yresponse.model";
import { TextContentDto, TextContentForCreateDto } from "../../models/content/contentText.models";
import { BaseContentDto, ContentForCreateDto } from "../../models/content/content.model";
import { PictureContentForCreateDto, PictureContentForReturnDto } from "../../models/content/contentPicture.models";

@Injectable({
  providedIn: "root"
})
export class ContentDataAPIService {

  private apiUrl = environment.contentAPI;
  private y = environment.contentY;

  constructor(private http: HttpClient) {
  }

  // region Content

  async UploadContent(contentForCreateDto: ContentForCreateDto): Promise<YResponse<undefined> | undefined> {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom<YResponse<undefined>>(
      this.http.post<YResponse<undefined>>(`${this.apiUrl}/y1/Content/Upload`, contentForCreateDto, {headers}),
    );
  }

  async GetContent(baseContentId: string): Promise<YResponse<BaseContentDto> | undefined> {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom(this.http.get<YResponse<BaseContentDto>>(
      `${this.apiUrl}/y1/Content/GetContent/${baseContentId}`, {headers}
    ));
  }

  async DeleteContent() {
    // TODO: Add this after api
  }

  // endregion
  // region Text

  async UploadTextContent(textContentForCreateDto: TextContentForCreateDto): Promise<YResponse<TextContentDto> | undefined> {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);
    return await firstValueFrom(this.http.post<YResponse<TextContentDto>>(
      `${this.apiUrl}/y1/Text/Add`, textContentForCreateDto, {headers},));
  }

  async UpdateTextContent() {

  }

  async GetTextContent(childId: string): Promise<YResponse<TextContentDto> | undefined> {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom(this.http.get<YResponse<TextContentDto>>(
      `${this.apiUrl}/y1/Text/Get/${childId}`, {headers}
    ));
  }

  // endregion
  // region Picture

  async UploadPictureContent(pictureContentForCreateDto: PictureContentForCreateDto): Promise<YResponse<PictureContentForReturnDto>> {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom(this.http.post<YResponse<PictureContentForReturnDto>>(
      `${this.apiUrl}/y1/Picture/Add`, pictureContentForCreateDto, {headers}
    ));
  }

  async UpdatePictureContent() {

  }

  async GetPictureContent(childId: string): Promise<YResponse<PictureContentForReturnDto>> {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom(this.http.get<YResponse<PictureContentForReturnDto>>(
      `${this.apiUrl}/y1/Picture/Get/${childId}`, {headers}
    ));
  }

  // endregion
}
