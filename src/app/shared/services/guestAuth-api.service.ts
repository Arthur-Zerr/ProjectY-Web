import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GuestAuthApiService {

  constructor(private http: HttpClient) {
  }

  async login(): Promise<void> {
  }


  async logout(): Promise<void> {
  }
}
