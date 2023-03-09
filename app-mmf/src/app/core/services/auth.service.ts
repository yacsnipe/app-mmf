import {Injectable} from '@angular/core';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {
  auth = getAuth();

  public createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        createUserWithEmailAndPassword(this.auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            resolve(user);
          })
          .catch((error) => {
            reject(error);
          });
      }
    );
  }

  public signIn(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        signInWithEmailAndPassword(this.auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            resolve(user);
          })
          .catch((error) => {
            reject(error);
          });
      }
    );
  }

  public isSignedIn(): Observable<boolean> {
    console.log(this.auth.currentUser);
    return new Observable((subscriber) => {
      this.auth.currentUser ? subscriber.next(true) : subscriber.error(false)
    });
  }

  public signOutUser() {
    signOut(this.auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      console.log(error);
      // An error happened.
    });
  }

}
