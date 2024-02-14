export class YResponse<T> {
  public code: string;
  public success: boolean;
  public data: T;


  constructor(code: string, success: boolean, data: T) {
    this.code = code;
    this.success = success;
    this.data = data;
  }
}
