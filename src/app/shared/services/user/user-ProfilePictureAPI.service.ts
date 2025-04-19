import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { YResponse } from "../../models/yresponse.model";
import { ProfilePictureMetaDataForReturnDto } from "../../models/user/userData.model";

@Injectable({
  providedIn: "root"
})
export class UserProfilePictureAPIService {

  private apiUrl = environment.userAPI;
  private y = environment.userY;

  constructor(private http: HttpClient) {
  }

  async UploadProfilePicture(file: File): Promise<YResponse<ProfilePictureMetaDataForReturnDto>> {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    const uploadData = new FormData();
    uploadData.append("pictureFile", file, file.name);

    return await firstValueFrom<YResponse<ProfilePictureMetaDataForReturnDto>>(
      this.http.post<YResponse<ProfilePictureMetaDataForReturnDto>>(`${this.apiUrl}/y1/ProfilePicture`, uploadData, {headers}),
    );
  }

  async GetProfilePictureForUsername(atUsername: string): Promise<Blob | YResponse<undefined>> {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom<Blob | YResponse<undefined>>(
      this.http.get<Blob | YResponse<undefined>>(`${this.apiUrl}/y1/ProfilePicture/GetProfilePictureForUsername/${atUsername}`, {headers}),
    );
  }

  async GetProfilePictureForCurrentUser() {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom<Blob | YResponse<undefined>>(
      this.http.get<Blob | YResponse<undefined>>(`${this.apiUrl}/y1/ProfilePicture/GetProfilePictureForCurrentUser`, {headers}),
    );
  }

  async GetProfilePictureMetaDataForCurrentUser(): Promise<YResponse<ProfilePictureMetaDataForReturnDto>> {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom<YResponse<ProfilePictureMetaDataForReturnDto>>(
      this.http.get<YResponse<ProfilePictureMetaDataForReturnDto>>(`${this.apiUrl}/y1/ProfilePicture/GetProfilePictureMetaDataForCurrentUser`, {headers}),
    );
  }

  async GetProfilePictureMetaDataForOtherUser(atUsername: string): Promise<YResponse<ProfilePictureMetaDataForReturnDto>> {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom<YResponse<ProfilePictureMetaDataForReturnDto>>(
      this.http.get<YResponse<ProfilePictureMetaDataForReturnDto>>(`${this.apiUrl}/y1/ProfilePicture/GetProfilePictureMetaDataForOtherUser/${atUsername}`, {headers}),
    );
  }

  async GetAllProfilePicturesForCurrentUser(): Promise<YResponse<ProfilePictureMetaDataForReturnDto[]>> {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom<YResponse<ProfilePictureMetaDataForReturnDto[]>>(
      this.http.get<YResponse<ProfilePictureMetaDataForReturnDto[]>>(`${this.apiUrl}/y1/ProfilePicture/GetAllProfilePicturesForCurrentUser`, {headers}),
    );
  }

  async GetAllDeletedProfilePicturesForCurrentUser(): Promise<YResponse<ProfilePictureMetaDataForReturnDto[]>> {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom<YResponse<ProfilePictureMetaDataForReturnDto[]>>(
      this.http.get<YResponse<ProfilePictureMetaDataForReturnDto[]>>(`${this.apiUrl}/y1/ProfilePicture/GetAllDeletedProfilePicturesForCurrentUser`, {headers}),
    );
  }

  async SetProfilePicture(pictureMetaDataId: string): Promise<YResponse<undefined>> {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom<YResponse<undefined>>(
      this.http.post<YResponse<undefined>>(`${this.apiUrl}/y1/ProfilePicture/SetProfilePicture/${pictureMetaDataId}`, {headers}),
    );
  }

  async RecoverProfilePicture(pictureMetaDataId: string): Promise<YResponse<undefined>> {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom<YResponse<undefined>>(
      this.http.post<YResponse<undefined>>(`${this.apiUrl}/y1/ProfilePicture/RecoverProfilePicture/${pictureMetaDataId}`, {headers}),
    );
  }

  async DeleteProfilePicture(pictureMetaDataId: string): Promise<YResponse<undefined>> {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom<YResponse<undefined>>(
      this.http.post<YResponse<undefined>>(`${this.apiUrl}/y1/ProfilePicture/${pictureMetaDataId}`, {headers}),
    );
  }
}
