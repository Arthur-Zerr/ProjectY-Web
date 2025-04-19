export class SidebarModel {
  public key: string;
  public isActive: boolean;

  constructor(key: string, isActive: boolean) {
    this.key = key;
    this.isActive = isActive;
  }

  Active() {
    this.isActive = true;
  }

  Inactive() {
    this.isActive = false;
  }
}
