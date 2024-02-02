import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { JobApplication } from "../models/job-application.model";

@Injectable({
	providedIn: "root"
})
export class FeJobApplicationService {
	private apiUrl = "http://localhost:4200/api/job-applications"; // Replace with your actual API URL

	constructor(private http: HttpClient, private _matSnackBar: MatSnackBar) {}

	createJobApplication(
		jobApplication: Omit<JobApplication, "id">
	): Observable<JobApplication> {
		return this.http.post<JobApplication>(this.apiUrl, jobApplication).pipe(
			tap(() =>
				this.showSnackBar("Job application created successfully")
			),
			catchError((error) => {
				this.showSnackBar("Failed to create job application");
				return throwError(error);
			})
		);
	}

	getAllJobApplications(): Observable<JobApplication[]> {
		return this.http.get<JobApplication[]>(this.apiUrl).pipe(
			catchError((error) => {
				this.showSnackBar("Failed to retrieve job applications");
				return throwError(error);
			})
		);
	}

	getJobApplicationById(id: string): Observable<JobApplication> {
		return this.http.get<JobApplication>(`${this.apiUrl}/${id}`).pipe(
			tap(() =>
				this.showSnackBar("Job application retrieved successfully")
			),
			catchError((error) => {
				this.showSnackBar("Failed to retrieve job application");
				return throwError(error);
			})
		);
	}

	updateJobApplication(
		id: string,
		jobApplication: Omit<JobApplication, "id">
	): Observable<JobApplication> {
		return this.http
			.put<JobApplication>(`${this.apiUrl}/${id}`, jobApplication)
			.pipe(
				tap(() =>
					this.showSnackBar("Job application updated successfully")
				),
				catchError((error) => {
					this.showSnackBar("Failed to update job application");
					return throwError(error);
				})
			);
	}

	deleteJobApplication(id: string): Observable<void> {
		return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
			tap(() =>
				this.showSnackBar("Job application deleted successfully")
			),
			catchError((error) => {
				this.showSnackBar("Failed to delete job application");
				return throwError(error);
			})
		);
	}

	private showSnackBar(message: string): void {
		this._matSnackBar.open(message, "Close", {
			duration: 3000,
			panelClass: ["snackbar-success"]
		});
	}
}
