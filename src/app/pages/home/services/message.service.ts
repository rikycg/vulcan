import { IHttpBase } from '../../../../../infra/http/http.interface';

import { httpService } from '../../../../../core/services/http.service';
import { apiConfig } from '../../../../../core/config';

class MessageService {
  constructor(
    public httpService: IHttpBase,
  ) { }
  sendMessage(from: string, to: string, message: string, subject: string) {
    return this.httpService.post(apiConfig.sendMessage, {
      to,
      from,
      message,
      subject,
    });
  }
}

export const messageService = new MessageService(httpService);