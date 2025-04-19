import { Injectable } from "@angular/core";
import { PictureLoginDto, PictureLoginReturnDto } from "../../models/picture/pictureAuth.model";
import { YResponse } from "../../models/yresponse.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class PictureAuthAPIService {

  private apiUrl = environment.pictureAPI;
  private y = environment.pictureY;

  constructor(private http: HttpClient) {
  }

  async login(loginDto: PictureLoginDto, authApiToken: string): Promise<YResponse<PictureLoginReturnDto>> {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);
    headers.set("YAuth", authApiToken);

    return await firstValueFrom<YResponse<PictureLoginReturnDto>>(
      this.http.post<YResponse<PictureLoginReturnDto>>(`${this.apiUrl}/y1/Auth/Login`, loginDto, {headers}),
    );
  }

  async logout(): Promise<YResponse<undefined>> {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom<YResponse<undefined>>(
      this.http.post<YResponse<undefined>>(`${this.apiUrl}/y1/Auth/Logout`, undefined, {headers}),
    );
  }
}
