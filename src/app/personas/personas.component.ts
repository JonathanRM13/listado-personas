import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.sevices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  
  personas: Persona[] = [];

  constructor(
    private loggingService: LoggingService, 
    private personaService: PersonasService,
    private router:Router
    ) {

  }
  ngOnInit(): void {
    this.personaService.obtenerPersonas()
    .subscribe(
      res => {
        console.log("Respuesta DB: "+res)
        this.personas = <Persona[]>res;
        this.personaService.setPersonas(<Persona[]>res);
      },
      error => console.error(error)
      
    );
    
  }

  agregar() {
    this.router.navigate(['personas/agregar'])
  }
}
