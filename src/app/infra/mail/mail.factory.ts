import { MailVendorNames } from './enums/mail-vendor-names.enum';
import { IMailHttp } from './interfaces/mail-http.interface';
import { ICreateMailOptions } from './interfaces/mail-options.interface';
import { MailBase } from './mail.base';
import { SparkPost } from './vendors/sparkpost/sparkpost.vendor';

export const getMail = (options: ICreateMailOptions, http: IMailHttp): MailBase => {
  if (options.vendor === MailVendorNames.SparkPost) {
    return new SparkPost(http, options.credentials);
  }

  throw new Error('Invalid mail vendor');
}