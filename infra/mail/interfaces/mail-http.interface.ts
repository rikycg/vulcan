export interface IMailHttp {
  post(url: string, body: any, options?: any): Promise<Response>;
}