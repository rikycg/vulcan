import { ISendEmailDto } from './dtos/send-email.dto';
import { IMailHttp } from './interfaces/mail-http.interface';

export abstract class MailBase {
  constructor(
    public http: IMailHttp,
    public credentials: Object,
  ) { }

  abstract send(data: ISendEmailDto): Promise<Response>;
}