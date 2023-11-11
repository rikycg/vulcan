import { MailBase } from '../../mail.base';

import { ISparkPostCredentials } from './interfaces/sparkpost-credentials.interface';
import { ISparkPostHttp } from './interfaces/sparkpost-http.interface';
import { ISparkPostSendEmailDto } from './dtos/sparkpost-send-email.dto';
import { SparkPostConfig } from './sparkpost.config';
import { SpartPostSendEmail } from './models/sparkpost-send-email.model';

export class SparkPost extends MailBase {
  constructor(
    public http: ISparkPostHttp,
    public credentials: ISparkPostCredentials,
  ) {
    super(http, credentials);
  }

  send(data: ISparkPostSendEmailDto) {
    const request = new SpartPostSendEmail(data);

    return this.http.post(
      SparkPostConfig.path,
      request, 
      {
        headers: {
          'Authorization': this.credentials.key,
        }
      }
    );
  }
}