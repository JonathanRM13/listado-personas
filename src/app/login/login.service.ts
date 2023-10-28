import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut  } from 'firebase/auth';
import firebase from 'firebase/compat/app';

@Injectable()
export class LoginService {
    
    token: string | null = '';

    constructor(private router: Router){
        const firebaseConfig = {
            apiKey: 'AIzaSyBzQy8FGbbeL7db8A-4jXwMyd9KBzFvH4E',
            authDomain: 'listado-personas-a266f.firebaseapp.com',
            // Otros datos de configuración
        };
        const app = initializeApp(firebaseConfig);
    }

    login(email: string, password: string) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                userCredential.user.getIdToken()
                    .then((token) => {
                        this.token = token;
                        this.router.navigate(['/']);
                    })
                    .catch((error) => {
                        console.error('Error al obtener el token:', error);
                    });
            })
            .catch((error) => {
                console.error('Error de inicio de sesión:', error);
            });
    }

    getIdToken() {
        return this.token;
    }

    isAutenticado() {
        return this.token != null;
    }

    logout() {
        const auth = getAuth();
        signOut(auth).then(() => {
            this.token = null;
            this.router.navigate(['login']);
        }).catch(error => console.log("Error logout:", error));
    }
    
}
