import { getMail } from '../../infra/mail/mail.factory';
import { MailVendorNames } from '../../infra/mail/enums/mail-vendor-names.enum';

import { httpService } from './http.service';
import { sparkPostConfig } from '../config';

const options = { 
  vendor: MailVendorNames.SparkPost,
  credentials: sparkPostConfig
};

export const mailService = getMail(options, httpService);