import { Injectable } from "@angular/core";
import CryptoJS from "crypto-js";

@Injectable({
  providedIn: "root"
})
export class LocalStorageService {

  // TODO: change to dynamic generated key for every user
  private baseKey = "5f29a927-c97f-47c7-b26a-04e8345ea761";

  constructor() {
  }

  write(key: string, value: any) {
    const encryptedKey = CryptoJS.AES.encrypt(key, this.baseKey);
    const encryptedValue = CryptoJS.AES.encrypt(value, key);

    localStorage.setItem(encryptedKey.toString(), encryptedValue.toString());
  }

  get<T>(key: string): T | null {
    const encryptedKey = CryptoJS.AES.encrypt(key, this.baseKey);

    const value = localStorage.getItem(encryptedKey.toString());
    if (value) {
      const decryptedValue = CryptoJS.AES.decrypt(value, key);
      return JSON.parse(decryptedValue.toString()) as T;
    }
    return null;
  }

  remove(key: string) {
    const encryptedKey = CryptoJS.AES.encrypt(key, this.baseKey);
    localStorage.removeItem(encryptedKey.toString());
  }

  clear() {
    localStorage.clear();
  }
}
