import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ContentYouAPIService {

  constructor(private http: HttpClient) {
  }

  async GetYouContentForCurrentUser() {
  }
}
