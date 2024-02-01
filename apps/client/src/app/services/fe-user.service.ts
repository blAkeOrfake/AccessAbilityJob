import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, map } from "rxjs";
import { CreateUserDto, IUser, User } from "../models/user.model";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { FeOfferService } from "./fe-offer.service";

@Injectable({
	providedIn: 'root',
})
export class FeUserService {

	private apiUrl = 'http://localhost:4200/api/users'; // Replace with your actual API URL

	private loggedUser: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(this.tryToRecoverUserFromStorage());
	constructor(
		private http: HttpClient,
		private _snackBar: MatSnackBar,
		private feOfferService: FeOfferService
		) {
			console.log('>>> User service created <<<');
		}

	getLoggedUserAsObs(): Observable<User | null> {
		return this.loggedUser.asObservable();
	}
	getLoggedUser(): User | null {
		return this.loggedUser.value;
	}

	// Get all users
	getAllUsers(): Observable<User[]> {
		return this.http.get<User[]>(this.apiUrl).pipe(map((res: User[]) => res.map((user: User) => new User(user))));
	}

	// Get a single user by ID
	getUserById(id: string): Observable<User> {
		return this.http.get<User>(`${this.apiUrl}/${id}`);
	}

	// Create a new user
	createUser(data: CreateUserDto): void {
		if (this.isUserLoggedIn()) return;

		this.http.post<User>(this.apiUrl, data).subscribe((x: IUser) => {
			if (x) {
				this._snackBar.open("User created successfully", '', { duration: 5000, panelClass: ['snackbar-success'] });
			} else {
				this._snackBar.open("Error while creating user", '', { duration: 5000, panelClass: ['snackbar-error'] });
			}
			this.loggedUser.next(new User(x));
		})
	}

	// Update an existing user
	updateUser(id: string, user: User): Observable<User> {
		if (id === this.loggedUser.value?.id) {
			this.loggedUser.next(user);
			localStorage.setItem('user', JSON.stringify(user));
		}
		return this.http.put<User>(`${this.apiUrl}/${id}`, user);
	}

	// Delete a user
	deleteUser(id: string): Observable<void> {
		return this.http.delete<void>(`${this.apiUrl}/${id}`);
	}

	deleteAllUsers(): Observable<void> {
		return this.http.delete<void>(`${this.apiUrl}/all`);
	}

	login(data: CreateUserDto): void {
		if (this.isUserLoggedIn()) return;

		this.http.post<User>(`${this.apiUrl}/login`, data).subscribe(x => {
			if (x) {
				this._snackBar.open("User logged successfully", '', { duration: 5000, panelClass: ['snackbar-success'] });
				this.loggedUser.next(new User(x));
				localStorage.setItem('user', JSON.stringify(x));

			} else {
				this._snackBar.open("User not found", '', { duration: 5000, panelClass: ['snackbar-error'] });
			}

		});
	}

	logout(): void {
		if (!this.isUserLoggedIn("User is not logged in")) return;

		this.http.post<void>(`${this.apiUrl}/logout`, {}).subscribe(() => {
			this._snackBar.open("User logged out successfully", '', { duration: 5000, panelClass: ['snackbar-success'] });
			this.loggedUser.next(null);
			localStorage.removeItem('user');
		});
	}

	private isUserLoggedIn(altMessage: string | null = null): boolean {

		if (this.loggedUser.value) {
			this._snackBar.open(altMessage ? altMessage : "User already logged in", '', { duration: 5000, panelClass: ['snackbar-error'] });
		}
		return !!this.loggedUser.value;
	}


	private tryToRecoverUserFromStorage(): User | null {
		const user = localStorage.getItem('user');
		if (user) {
			return new User(JSON.parse(user));
		}
		return null;
	}
}
