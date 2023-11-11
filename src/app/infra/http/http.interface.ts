export interface IHttpBase {
  get(url: string): Promise<Response>;
  post(url: string, body: any, options?: any): Promise<Response>;
  put(url: string, body: any): Promise<Response>;
  delete(url: string): Promise<Response>;
}