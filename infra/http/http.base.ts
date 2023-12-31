import { IHttpBase } from './http.interface';

export class HttpBase implements IHttpBase {
  get(url: string): Promise<Response> {
    return fetch(url);
  }

  async post(url: string, body: any, options?: any): Promise<Response> {
    const headers = options?.headers || {};
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });

    return response;
  }

  put(url: string, body: any): Promise<Response> {
    return fetch(url, {
      method: 'PUT',
      body: JSON.stringify(body),
    });
  }

  delete(url: string): Promise<Response> {
    return fetch(url, {
      method: 'DELETE',
    });
  }
}