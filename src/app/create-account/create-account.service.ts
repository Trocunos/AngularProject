import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CreateAccountService {

    constructor(private http: HttpClient) {}
    createAccount(data: any) {
        return this.http.post<any>('http://localhost:3000/createUsers', data);
    } 
}