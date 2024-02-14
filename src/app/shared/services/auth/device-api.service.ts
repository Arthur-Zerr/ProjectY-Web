import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DeviceApiService {

  constructor(private http: HttpClient) {
  }

  async registerDevice(): Promise<void> {
  }

  async deregisterDevice(): Promise<void> {
  }

  async setMain(): Promise<void> {

  }

  async validate(): Promise<void> {
  }
}
