import {Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class TokenService {

    tokenUrl = "http://localhost:8000/users/";

    constructor(private http: HttpClient) {  }
}