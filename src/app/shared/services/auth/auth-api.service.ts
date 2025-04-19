import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { GuestLoginDto, AuthLoginDto, AuthLoginReturnDto } from "../../models/authAPI.model";
import { YResponse } from "../../models/yresponse.model";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthApiService {

  private apiUrl = environment.authAPI;
  private y = environment.authY;

  constructor(private http: HttpClient) {
  }

  async login(loginDto: AuthLoginDto): Promise<YResponse<AuthLoginReturnDto>> {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom(
      this.http.post<YResponse<AuthLoginReturnDto>>(`${this.apiUrl}/y1/Auth/Login`, loginDto, {headers})
    );
  }

  async logout(): Promise<YResponse<undefined>> {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom(
      this.http.post<YResponse<undefined>>(`${this.apiUrl}/y1/Auth/Logout`, undefined, {headers})
    );
  }

  async register() {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom(
      this.http.post<YResponse<undefined>>(`${this.apiUrl}/y1/Auth/Register`, undefined, {headers})
    );
  }

  async loginGuest(guestLoginDto: GuestLoginDto): Promise<YResponse<AuthLoginReturnDto>> {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom(
      this.http.post<YResponse<AuthLoginReturnDto>>(`${this.apiUrl}/y1/GuestAuth/Login`, guestLoginDto, {headers})
    );
  }

  async logoutGuest(): Promise<YResponse<undefined>> {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom(
      this.http.post<YResponse<undefined>>(`${this.apiUrl}/y1/GuestAuth/Logout`, undefined, {headers})
    );
  }
}
