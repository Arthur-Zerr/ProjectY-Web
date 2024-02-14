import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { firstValueFrom } from "rxjs";
import { ContentLoginDto, ContentLoginReturnDto } from "../../models/content/contentUser.model";
import { YResponse } from "../../models/yresponse.model";

@Injectable({
  providedIn: "root"
})
export class ContentAuthAPIService {

  private apiUrl = environment.contentAPI;
  private y = environment.contentY;

  constructor(private http: HttpClient) {
  }

  async login(loginDto: ContentLoginDto): Promise<YResponse<ContentLoginReturnDto> | undefined> {
    try {
      const headers = new HttpHeaders();
      headers.set("Y", this.y);

      return await firstValueFrom(
        this.http.post<YResponse<ContentLoginReturnDto>>(`${this.apiUrl}/y1/Auth/Login`, loginDto, {headers})
      );
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  async logout(): Promise<YResponse<undefined> | undefined> {
    try {
      const headers = new HttpHeaders();
      headers.set("Y", this.y);

      return await firstValueFrom(
        this.http.post<YResponse<undefined>>(`${this.apiUrl}/y1/Auth/Logout`, undefined, {headers})
      );
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
}
