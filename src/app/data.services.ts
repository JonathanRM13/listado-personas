import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { LoginService } from './login/login.service';

@Injectable()
export class DataServices{
    constructor(private httpClient: HttpClient,
                private loginservice: LoginService) {}
    
    //Cargar Personas
    cargarPersonas() {
        const token = this.loginservice.getIdToken();
        return this.httpClient.get('https://listado-personas-a266f-default-rtdb.firebaseio.com/datos.json?auth=' + token);
    }

    //Guardar Personas
    guardarPersonas(personas: Persona[]) {
        const token = this.loginservice.getIdToken();
        this.httpClient.put('https://listado-personas-a266f-default-rtdb.firebaseio.com/datos.json?auth=' + token, 
        personas).subscribe(
            response => console.log("resultado guardar Personas: " + response),
            error => console.log("Error al guardar personas" +  error)
        );

    }

    //Modificar Persona
    modificarPersona(index: number, persona: Persona) {
        const token = this.loginservice.getIdToken();
        let url: string;
        url = 'https://listado-personas-a266f-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
        this.httpClient.put(url, persona).subscribe(
            response => console.log("resultado modificar Persona: " + response),
             error => console.log("Error en modificar Persona")
        );
    }

    //Eliminar Persona
    eliminarPersona(index: number) {
        const token = this.loginservice.getIdToken();
        let url: string;
        url = 'https://listado-personas-a266f-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
        this.httpClient.delete(url).subscribe(
            response => console.log("resultado eliminar Persona: " + response),
             error => console.log("Error en eliminar Persona")
        );
    }


}