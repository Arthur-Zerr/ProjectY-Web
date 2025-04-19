import { Injectable } from "@angular/core";
import { UserLoginDto, UserLoginForReturnDto } from "../../models/user/userAuth.model";
import { YResponse } from "../../models/yresponse.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserAuthAPIService {

  private apiUrl = environment.userAPI;
  private y = environment.userY;

  constructor(private http: HttpClient) {
  }

  /*
   * */
  async login(loginDto: UserLoginDto, authApiToken: string): Promise<YResponse<UserLoginForReturnDto>> {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);
    headers.set("YAuth", authApiToken);

    return await firstValueFrom<YResponse<UserLoginForReturnDto>>(
      this.http.post<YResponse<UserLoginForReturnDto>>(`${this.apiUrl}/y1/Auth/Login`, loginDto, {headers}),
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
