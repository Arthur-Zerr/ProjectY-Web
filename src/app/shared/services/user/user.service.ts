import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AuthLoginReturnDto } from "../../models/authAPI.model";
import { ContentLoginReturnDto } from "../../models/content/contentUser.model";
import { PictureLoginReturnDto } from "../../models/picture/pictureAuth.model";

@Injectable({
  providedIn: "root"
})
export class UserService {

  public yUser = new BehaviorSubject<AuthLoginReturnDto | null>(null);
  public yContentUser = new BehaviorSubject<ContentLoginReturnDto | null>(null);
  public yPictureUser = new BehaviorSubject<PictureLoginReturnDto | null>(null);

  constructor() {
  }
}
