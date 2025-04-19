import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { YResponse } from "../../models/yresponse.model";
import { firstValueFrom } from "rxjs";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class DeviceApiService {

  private apiUrl = environment.authAPI;
  private y = environment.authY;


  constructor(private http: HttpClient) {
  }

  async registerDevice(): Promise<void> {
  }

  async deregisterDevice(): Promise<void> {
  }

  async setMain(): Promise<void> {

  }

  async validate(): Promise<YResponse<undefined>> {
    const headers = new HttpHeaders();
    headers.set("Y", this.y);

    return await firstValueFrom<YResponse<undefined>>(
      this.http.post<YResponse<undefined>>(`${this.apiUrl}/y1/Device/Validate`, undefined, {headers}),
    );
  }
}
