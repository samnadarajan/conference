import {Injectable} from '@angular/core';
import {AngularFirestore, QueryFn} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(public db: AngularFirestore) {}

  get(collectionName: string) {
    return this.db.collection(collectionName).snapshotChanges();
  }

  getWithQuery(collectionName: string, queryFn: QueryFn) {
    return this.db.collection(collectionName, queryFn).snapshotChanges();
  }

  add(collectionName: string, data: any) {
    return this.db.collection(collectionName).add(data);
  }

  update(collectionName: string, data: any) {
    return this.db.collection(collectionName).doc(data.id).update(data);
  }
}
