import { DbVendorNames } from '../enums/db-vendor-names.enum';

export interface ICreateDbOptions {
  vendor: DbVendorNames;
}
