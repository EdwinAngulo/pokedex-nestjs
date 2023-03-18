import { Injectable } from '@nestjs/common';
import { HttpAdapter } from '../interfaces/http-adapter.interface';

@Injectable()
export class FetchAdapter implements HttpAdapter {
  private fetch: typeof fetch = fetch;
  async get<T>(url: string): Promise<T> {
    try {
      const response = await this.fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
