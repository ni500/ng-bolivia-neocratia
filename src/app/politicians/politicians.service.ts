import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PoliticiansService {
  constructor(private afs: AngularFirestore) {}

  addNewPolitician(newName: string, newParty: string) {
    const newKey = this.afs.createId();
    const newPolitician = {
      name: newName,
      party: newParty,
      key: newKey
    };
    return this.afs
      .collection('politicians')
      .doc(newKey)
      .set(newPolitician);
  }

  getAllPoliticians() {
    return this.afs.collection('politicians').valueChanges();
  }

  getPolitician(id: string) {
    console.log(id);
    return this.afs
      .collection('politicians', ref => ref.where('key', '==', id))
      .valueChanges();
  }

  getPoliticianVotes(politicianId: string) {
    return this.afs
      .collection('votes', ref =>
        ref.where('politicianKey', '==', politicianId)
      )
      .valueChanges();
  }
}
