import { Injectable } from '@angular/core';
import { AngularFirestore, QueryFn, QueryGroupFn } from '@angular/fire/firestore';
import { DocumentBase } from './models/document-base.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService<T extends DocumentBase = any> {

  constructor(protected afs: AngularFirestore) {
  }

  create<D>(path: string, value: D) {
    const id = this.afs.createId();
    const created = new Date();

    return this.set<D>(`${ path }/${ id }`, { id, ...value, created });
  }
  update<D>(path: string, value: D) {
    const updated = new Date();

    return this.set<D>(path, { ...value, updated });
  }
  private set<D>(path: string, value: D) {
    return this.afs.doc(path).set(value, { merge: true });
  }

  get(path: string) {
    return this.afs.doc<T>(path);
  }
  queryGroup(collection: string, query: QueryGroupFn) {
    return this.afs.collectionGroup<T>(collection, query);
  }
  query(path: string, query?: QueryFn) {
    return this.afs.collection<T>(path, query);
  }

  delete(path: string) {
    return this.afs.doc(path).delete();
  }
}