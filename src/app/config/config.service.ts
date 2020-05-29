//Deze klasse is nu nog nergens mee verbonden maar is er voor de configuratie van de server
//Zie config.component.ts voor de link die ik volg

//angular imports
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


//rxjs imports
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable()
export class ConfigService {

    /*Als je een HTTP GET request wil doen heb je de url en de 'options' nodig
    * Een http.get() call moet 1 keer worden gedaan met deze options om een basic config.json file te krijgen
    * die file kan dan later weer worden gebruikt om verbinding te maken met de server
    * Hoewel we al wel een config.json file hebben weet ik niet zeker of wij die hier ook voor kunnen gebruiken.
    */
    options: {
        observe: 'body', 
        responsetype: 'json'
    }

    //Hier komt de json file te staan van de eerste get call
    configUrl = 'hier de file naam';

    //Zet een basic httpClient op 
    constructor(private http: HttpClient) {  }

    //Met deze functie vraagt die de config aan
    getConfig() {
        return this.http.get(this.configUrl);
    }

}