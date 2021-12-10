import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UpdateAccountService {

    constructor(private http: HttpClient) {}
    updateAccount(data: any):Observable<any> {
        return this.http.put<any>('http://localhost:3000/updateUser', data);
    } 
}