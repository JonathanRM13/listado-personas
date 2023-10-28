import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.sevices';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  
  titulo = 'Listado de Personas';
  
  constructor(private loginService: LoginService){}

  ngOnInit():void {
    firebase.initializeApp({
      apiKey: "AIzaSyBzQy8FGbbeL7db8A-4jXwMyd9KBzFvH4E",
      authDomain: "listado-personas-a266f.firebaseapp.com",
    })
  }
 
  isAutenticado() {
    return this.loginService.isAutenticado();
  }

  salir() {
    this.loginService.logout();
  }

  /*onPersona(persona: Persona) {
    //this.loggingService.enviaMensajeAConsola("agregamos al arreglo la nueva persona: " + persona.nombre);
    //this.personas.push(persona);
    this.personaService.agregarPersona(persona); 
  }*/
}
