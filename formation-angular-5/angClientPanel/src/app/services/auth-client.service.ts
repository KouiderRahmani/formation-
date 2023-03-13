import { Injectable } from '@angular/core';
import  * as  firebase from '@angular/fire/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthClientService {

  constructor(private  afAuth:AngularFireAuth ) { }

  login( email :string , password:string){
    return new  Promise((resolve,reject)=>{
      this.afAuth.signInWithEmailAndPassword(email,password)
      .then((userData)=>resolve(userData),(error)=>reject(error))
    })
  }


loginWithGoogle(){
  return new  Promise((resolve,reject)=>{
    this.afAuth.signInWithPopup(new GoogleAuthProvider())
    .then((userData)=>resolve(userData),(error)=>reject(error))
  })
}
  getAuth() {
    return this.afAuth.authState.pipe(auth => 
      auth
    );
  }
logOut(){
  this.afAuth.signOut();
}

register( email :string , password:string){
  return new  Promise((resolve,reject)=>{
    this.afAuth.createUserWithEmailAndPassword(email,password)
    .then((userData)=>resolve(userData),(error)=>reject(error))
  })
}


}
