import { DbVendorNames } from '../../infra/db/enums/db-vendor-names.enum';
import { getDB } from '../../infra/db/db.factory';

import { firebaseConfig } from '../config';

const options = { vendor: DbVendorNames.Firestore, };

export const dbService = getDB(options, firebaseConfig);