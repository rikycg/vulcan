import { DbVendorNames } from './enums/db-vendor-names.enum';
import { ICreateDbOptions } from './interfaces/db-options.interface';
import { IDB } from './interfaces/db.interface';
import { FirestoreService } from './vendors/firestore/firestore';

export const getDB = (options: ICreateDbOptions, credentials: Object): IDB => {
  if (options.vendor === DbVendorNames.Firestore) {
    return new FirestoreService(credentials);
  }

  throw new Error('Invalid vendor');
}