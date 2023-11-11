export interface ISparkPostHttp {
  post(url: string, body: any, options?: any): Promise<Response>;
}