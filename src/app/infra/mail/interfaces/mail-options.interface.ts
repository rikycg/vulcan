import { MailVendorNames } from '../enums/mail-vendor-names.enum';

export interface ICreateMailOptions {
  vendor: MailVendorNames;
  credentials: any;
}