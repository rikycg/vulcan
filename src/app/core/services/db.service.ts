import { DbVendorNames } from '@/app/infra/db/enums/db-vendor-names.enum';
import { getDB } from '@/app/infra/db/db.factory';

import { firebaseConfig } from '../config';

const options = { vendor: DbVendorNames.Firestore, };

export const dbService = getDB(options, firebaseConfig);