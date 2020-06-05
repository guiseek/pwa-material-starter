import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { auth, User } from 'firebase/app';
import { Observable } from 'rxjs';
import { first, map, take } from 'rxjs/operators';
import { firebaseMessages } from './utils/messages';

export type authProviders = 'google' | 'github';
// export type authProviderIDs = 'google.com' | 'github';
const getProvider = (provider: authProviders | string) => {
  switch (true) {
    case provider.indexOf('google') > -1: return new auth.GoogleAuthProvider();
    case provider.indexOf('github') > -1: return new auth.GithubAuthProvider();
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  constructor(
    private aff: AngularFireFunctions,
    private afs: AngularFirestore,
    private afa: AngularFireAuth
  ) {
    this.user$ = this.afa.authState.pipe(
      map(user => user ? user : null)
    );
  }

  uid() {
    return this.user$
      .pipe(
        take(1),
        map(u => u && u.uid)
      ).toPromise();
  }
  user() {
    return this.user$
      .pipe(first())
      .toPromise();
  }

  async getIdToken() {
    const user = await this.hasCurrentUser();

    return user.getIdToken();
  }

  async refresh() {
    const user = await this.hasCurrentUser();
    const provider = user.providerData.shift();

    return user.reauthenticateWithPopup(
      new auth.EmailAuthProvider()
      // getProvider(provider.providerId)
    );
  }
  async removeAccount() {
    const user = await this.hasCurrentUser();

    return await this.refresh()
      .then(() => user.delete());
  }

  async updatePassword({ newer }) {
    const user = await this.hasCurrentUser();

    return await this.refresh()
      .then(() => user.updatePassword(newer));
  }

  async updateProfile({ displayName, photoURL }: User) {
    const user = await this.hasCurrentUser();

    return user
      .updateProfile({ displayName, photoURL });
  }
  async withProvider(provider: authProviders) {
    return this.afa
      .signInWithPopup(getProvider(provider))
      .catch(this.catchError);
  }

  createWithEmail({ email, password, displayName }) {
    return this.afa
      .createUserWithEmailAndPassword(email, password)

      .then(async (fauth) =>
        fauth.user.updateProfile({ displayName }))

      .catch(this.catchError);
  }
  withEmail({ email, password }) {
    return this.afa
      .signInWithEmailAndPassword(email, password)
      .catch(this.catchError);
  }
  hasCurrentUser() {
    if (!this.afa.currentUser) {
      throw new Error('Sem usuário');
    }
    return this.afa.currentUser;
  }
  forgotPassword(email: string) {
    return this.afa
      .sendPasswordResetEmail(email)
      .catch(this.catchError);
  }
  signOut() {
    return this.afa.signOut();
  }

  catchError({ code, message }) {
    const errors = firebaseMessages;
    return Promise.reject({
      code, message: errors[code]
        ? errors[code] : message
    })
  }
}
