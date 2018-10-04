import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router'
// import { HttpModule } from '@angular/http';

@Injectable()
export class AuthService {

  authState: any = null;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
  }
 

  
  loginWithEmail(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        return user;
        // this.authState = user
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }
  signOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login'])
  }
}
