import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	private baseUrl = 'http://localhost:4200/api';

	constructor(private http: HttpClient) { }

	getData(): Observable<object> {
		const url = `${this.baseUrl}`;
		return this.http.get<object>(url);
	}
}
