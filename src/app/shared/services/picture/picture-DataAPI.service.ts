import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { YResponse } from "../../models/yresponse.model";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class PictureDataAPIService {

  private apiUrl = environment.pictureAPI;
  private y = environment.pictureY;

  constructor(private http: HttpClient) {
  }

  async uploadPicture(file: File) {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    const uploadData = new FormData();
    uploadData.append("pictureFile", file, file.name);

    return await firstValueFrom<YResponse<undefined>>(
      this.http.post<YResponse<undefined>>(`${this.apiUrl}/y1/Picture/UploadPicture`, uploadData, {headers}),
    );

  }

  async getPictureMetaData(pictureId: string) {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom<YResponse<undefined>>(
      this.http.get<YResponse<undefined>>(`${this.apiUrl}/y1/Picture/GetPictureData/${pictureId}`, {headers}),
    );
  }

  async getRawPicture(pictureId: string) {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom<YResponse<undefined>>(
      this.http.get<YResponse<undefined>>(`${this.apiUrl}/y1/Picture/GetRawPicture/${pictureId}`, {headers}),
    );

  }

  async getCompressedPicture(pictureId: string) {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom<YResponse<undefined>>(
      this.http.get<YResponse<undefined>>(`${this.apiUrl}/y1/Picture/GetCompressedPicture/${pictureId}`, {headers}),
    );

  }
}
