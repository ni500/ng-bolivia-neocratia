import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { of, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<any>;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = this.afs.doc(`users/${user.uid}`).valueChanges();
      } else {
        this.user = of(null);
      }
    });
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  async emailSignUp(email: string, password: string) {
    try {
      const user = await this.afAuth.auth.createUserWithEmailAndPassword(
        email,
        password
      );
      return this.updateUserData(user.user);
    } catch (error) {
      return console.log(error);
    }
  }

  emailLogin(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
      user => {
        console.log(`Usuario ${user} logueado`);
      },
      err => {
        console.log(err);
      }
    );
  }

  async oAuthLogin(provider) {
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    this.updateUserData(credential.user);
  }

  private updateUserData(user) {
    const userRef = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      photoURL: user.photoURL,
      displayName: user.displayName,
      roles: {
        activist: false,
        politician: false,
        admin: false
      }
    };
    return userRef.set(data, { merge: true });
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  isLoggedIn() {
    this.user.subscribe(user => {
      if (user[0]) {
        return true;
      } else {
        return false;
      }
    });
  }
}
