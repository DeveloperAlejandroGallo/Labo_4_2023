import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, User } from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user!: User;

  constructor(private router: Router) {
    const auth = getAuth();
    auth.onAuthStateChanged(userAuth => {
      this.user = userAuth!;
    });
  }

  async login(email: string, password: string) {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      this.router.navigate(['/error']);
    } catch (error) {
      console.log('Error logging in:', error);
    }
  }

  async logout() {
    try {
      const auth = getAuth();
      await signOut(auth);
      this.router.navigate(['/login']);
    } catch (error) {
      console.log('Error al desloguearse:', error);
    }
  }

  async signup(email: string, password: string) {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      this.router.navigate(['/error']);
    } catch (error) {
      console.log('Error loguearse:', error);
    }
  }

  getCurrentUser(): Promise<User | null> {
    return new Promise<User | null>((resolve, reject) => {
      const auth = getAuth();
      const unsubscribe = auth.onAuthStateChanged(user => {
        unsubscribe();
        resolve(user);
      }, reject);
    });
  }

  isLoggedIn(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const auth = getAuth();
      const unsubscribe = auth.onAuthStateChanged(user => {
        unsubscribe();
        resolve(user !== null);
      }, reject);
    });
  }

}
