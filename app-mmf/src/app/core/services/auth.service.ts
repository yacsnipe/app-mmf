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
    return new Observable((subscriber) => {
      subscriber.next(this.auth.currentUser ? true : false);
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
