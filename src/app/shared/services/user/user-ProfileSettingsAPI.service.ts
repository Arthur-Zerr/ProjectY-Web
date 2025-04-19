import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {
  UserNameForUpdateDto,
  YUserProfileSettingsForCreateDto,
  YUserProfileSettingsForReturnDto
} from "../../models/user/userData.model";
import { YResponse } from "../../models/yresponse.model";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserProfileSettingsAPIService {

  private apiUrl = environment.userAPI;
  private y = environment.userY;

  constructor(private http: HttpClient) {
  }

  async Add(userProfileSettingsDto: YUserProfileSettingsForCreateDto): Promise<YResponse<YUserProfileSettingsForReturnDto>> {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom<YResponse<YUserProfileSettingsForReturnDto>>(
      this.http.post<YResponse<YUserProfileSettingsForReturnDto>>(`${this.apiUrl}/y1/UserProfileSettings`, userProfileSettingsDto, {headers}),
    );
  }

  async Update(userProfileSettingsDto: YUserProfileSettingsForCreateDto): Promise<YResponse<YUserProfileSettingsForReturnDto>> {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom<YResponse<YUserProfileSettingsForReturnDto>>(
      this.http.put<YResponse<YUserProfileSettingsForReturnDto>>(`${this.apiUrl}/y1/UserProfileSettings`, userProfileSettingsDto, {headers}),
    );
  }

  async UpdateUsername(userNameForUpdateDto: UserNameForUpdateDto) {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom<YResponse<YUserProfileSettingsForReturnDto[]>>(
      this.http.put<YResponse<YUserProfileSettingsForReturnDto[]>>(`${this.apiUrl}/y1/User/UpdateUsername`, userNameForUpdateDto, {headers}),
    );
  }

  async GetAllForCurrentUser(): Promise<YResponse<YUserProfileSettingsForReturnDto[]>> {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom<YResponse<YUserProfileSettingsForReturnDto[]>>(
      this.http.get<YResponse<YUserProfileSettingsForReturnDto[]>>(`${this.apiUrl}/y1/UserProfileSettings/GetAllForCurrentUser`, {headers}),
    );
  }

  async GetSpecificForCurrentUser(type: number): Promise<YResponse<YUserProfileSettingsForReturnDto[]>> {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom<YResponse<YUserProfileSettingsForReturnDto[]>>(
      this.http.get<YResponse<YUserProfileSettingsForReturnDto[]>>(`${this.apiUrl}/y1/UserProfileSettings/GetSpecificForCurrentUser/${type}`, {headers}),
    );
  }

  async GetAllForUser(atUserName: string): Promise<YResponse<YUserProfileSettingsForReturnDto[]>> {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom<YResponse<YUserProfileSettingsForReturnDto[]>>(
      this.http.get<YResponse<YUserProfileSettingsForReturnDto[]>>(`${this.apiUrl}/y1/UserProfileSettings/GetAllForUser/${atUserName}`, {headers}),
    );
  }

  async GetSpecificForUser(atUserName: string, type: number) {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom<YResponse<YUserProfileSettingsForReturnDto[]>>(
      this.http.get<YResponse<YUserProfileSettingsForReturnDto[]>>(`${this.apiUrl}/y1/UserProfileSettings/GetSpecificForUser/${atUserName}/${type}`, {headers}),
    );
  }

  async Delete(id: number) {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom<YResponse<undefined[]>>(
      this.http.delete<YResponse<undefined[]>>(`${this.apiUrl}/y1/UserProfileSettings/${id}`, {headers}),
    );
  }
}
