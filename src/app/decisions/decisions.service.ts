import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DecisionsService {
  constructor(private afs: AngularFirestore) {}

  addNewDecision(newTitle: string, newDescription: string) {
    const newKey = this.afs.createId();
    const newDecision = {
      title: newTitle,
      description: newDescription,
      dateCreated: new Date().getTime().toString(),
      key: newKey,
      votes: []
    };
    return this.afs
      .collection('decisions')
      .doc(newKey)
      .set(newDecision);
  }

  getAllDecisions() {
    return this.afs.collection('decisions').valueChanges();
  }

  setVote(decisionId: string, politicianId: string, newVote: string) {
    const voteDoc = {
      politicianKey: politicianId,
      decisionKey: decisionId,
      vote: newVote
    };
    return this.afs
      .collection(`votes`)
      .doc(`${decisionId}_${politicianId}`)
      .set(voteDoc, { merge: true });
  }

  getDecisionVotes(decisionId: string) {
    return this.afs
      .collection('votes', ref => ref.where('decisionKey', '==', decisionId))
      .valueChanges();
  }
}
