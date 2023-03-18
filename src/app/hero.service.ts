import { Injectable } from '@angular/core';
import { Cricket,bat ,ball, kit} from 'src/assets/data';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { getAuth } from '@firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import {
  addDoc,
  collection,
  collectionData,
  Firestore,
  getDoc,
  getFirestore,
  onSnapshot,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  userId: any;
  db: any = getFirestore()
  userData: any;

  constructor(private router: Router,
    private auth: Auth,
    private firestore: Firestore) { }
  
  giveData(){
    return Cricket
  }

  giveData1(){
    return bat
  }
  giveData2(){
    return ball
  }
giveData3(){
  return kit
}

register(creds: any) {
  createUserWithEmailAndPassword(this.auth, creds.email, creds.password).then(
    () => {
      this.userId = this.auth.currentUser?.uid;
      const userDetails = {
        uid: this.userId,
        name: creds.name,
        email: creds.email,
      };
      const docRef = collection(this.firestore, 'users');
      addDoc(docRef, userDetails)
        .then(() => {alert("sucessfull")})
        
    },
    
  );
  
}

login(email: string, password: string) {
  signInWithEmailAndPassword(this.auth, email, password).then(
    () => {
      localStorage.setItem('email', email);
      this.userId = this.auth.currentUser?.uid;
      console.log(this.userId);
      alert('succefully loggedin')
      this.router.navigate(['home']);
    },
    (err) => {
      alert('Something went wrong, please try again.');
      this.router.navigate(['/log in']);
    }
  );
}
insertData(docRef:any,data:any){
  addDoc(docRef,data)
  .catch((err)=>alert(err))
}
visible : boolean | undefined
no(): void{ this.visible= false; }
yes() { this.visible = true; }
doSomethingElseUseful() { }

}


