import { initializeApp } from 'firebase/app';
import { Firestore, collection, getDocs, getFirestore } from 'firebase/firestore';

import { IDB } from '../../interfaces/db.interface';

export class FirestoreService implements IDB {
  private instance: Firestore;

  constructor(credentials: any) {
    const app = initializeApp(credentials);

    this.instance = getFirestore(app);
  }
  
  get(tableName: string) {
    return getDocs(collection(this.instance, tableName)).then((response) => {
      return response.docs.map((doc) => doc.data());
    });
  }
}