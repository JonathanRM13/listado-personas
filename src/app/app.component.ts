import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.sevices';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  
  titulo = 'Listado de Personas';
  
 

  /*onPersona(persona: Persona) {
    //this.loggingService.enviaMensajeAConsola("agregamos al arreglo la nueva persona: " + persona.nombre);
    //this.personas.push(persona);
    this.personaService.agregarPersona(persona); 
  }*/
}
