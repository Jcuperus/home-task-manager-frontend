import { Injectable } from '@angular/core';
import { User } from './user';
import { of, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

    userUrl = "http://localhost:8080/users/";

    constructor(private http: HttpClient) {  }
    
}