import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserApiService {

  constructor(private http: HttpClient) {
  }

  async getData(): Promise<void> {
  }

  async getRoles(): Promise<void> {
  }
}
