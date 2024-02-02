import { Injectable } from "@angular/core";
import { JobOffer, JobOfferDto } from "../models/job-offer.model";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class FeOfferService {
	private apiUrl = "http://localhost:4200/api/job-offers"; // Replace with your actual API URL

	constructor(private http: HttpClient) {
		console.log(">>> Offer service created <<<");
	}

	// Get all job offers
	getAllJobOffers(): Observable<JobOffer[]> {
		return this.http
			.get<JobOffer[]>(this.apiUrl)
			.pipe(
				map((res: JobOfferDto[]) =>
					res.map((offer: JobOfferDto) => new JobOffer(offer))
				)
			);
	}

	// Get a single job offer by ID
	getJobOfferById(id: string): Observable<JobOffer> {
		return this.http.get<JobOffer>(`${this.apiUrl}/${id}`);
	}

	// Create a new job offer
	createJobOffer(jobOffer: JobOffer): Observable<JobOffer> {
		return this.http.post<JobOffer>(this.apiUrl, jobOffer);
	}

	// Update an existing job offer
	updateJobOffer(id: string, jobOffer: JobOffer): Observable<JobOffer> {
		return this.http.put<JobOffer>(`${this.apiUrl}/${id}`, jobOffer);
	}

	// Delete a job offer
	deleteJobOffer(id: string): Observable<void> {
		return this.http.delete<void>(`${this.apiUrl}/${id}`);
	}

	deleteAllJobOffers(): Observable<void> {
		return this.http.delete<void>(`${this.apiUrl}/all`);
	}

	createSampleJobOffers(): Observable<void> {
		return this.http.post<void>(`${this.apiUrl}/sample`, {});
	}
}
