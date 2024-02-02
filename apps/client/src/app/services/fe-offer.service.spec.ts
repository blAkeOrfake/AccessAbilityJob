import { TestBed } from "@angular/core/testing";
import {
	HttpClientTestingModule,
	HttpTestingController
} from "@angular/common/http/testing";
import { FeOfferService } from "./fe-offer.service";
import { JobOffer, JobOfferDto } from "../models/job-offer.model";

describe("FeOfferService", () => {
	let service: FeOfferService;
	let httpMock: HttpTestingController;
	const apiUrl = "http://localhost:4200/api/job-offers";

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [FeOfferService]
		});
		service = TestBed.inject(FeOfferService);
		httpMock = TestBed.inject(HttpTestingController);
	});

	afterEach(() => {
		httpMock.verify();
	});

	it("should create a new job offer", () => {
		const mockJobOfferDto: JobOfferDto = {
			id: "any-id", // This will be ignored on POST but required for the type
			title: "Developer",
			company: "Company A",
			location: "Location A",
			salaryRange: { min: 50000, max: 70000 },
			jobType: "Full-time",
			description: "Job Description",
			requirements: ["requirement1", "requirement2"],
			responsibilities: ["responsibility1", "responsibility2"],
			benefits: ["benefit1", "benefit2"],
			accessibilityFeatures: ["feature1", "feature2"],
			postedDate: new Date(),
			expiryDate: new Date()
		};

		const newJobOffer: JobOffer = new JobOffer(mockJobOfferDto);

		service.createJobOffer(newJobOffer).subscribe((offer) => {
			expect(offer).toEqual(newJobOffer);
		});

		const request = httpMock.expectOne(apiUrl);
		expect(request.request.method).toBe("POST");
		request.flush(newJobOffer); // Simulate a successful response with the new job offer
	});

	// Continuing from the previous test suite setup...

	it("should retrieve all job offers", () => {
		const dummyOffers: JobOfferDto[] = [
			{
				id: "1",
				title: "Developer",
				company: "Company A",
				location: "New York",
				salaryRange: { min: 70000, max: 100000 },
				jobType: "Full-time",
				description: "Great job",
				requirements: ["5+ years of experience"],
				responsibilities: ["Develop software"],
				benefits: ["Health insurance"],
				accessibilityFeatures: ["Elevator"],
				postedDate: new Date(),
				expiryDate: new Date(
					new Date().setFullYear(new Date().getFullYear() + 1)
				)
			}
			// Add more job offers as needed for testing
		];

		service.getAllJobOffers().subscribe((offers) => {
			expect(offers.length).toBe(2);
			expect(offers).toEqual(
				dummyOffers.map((offer) => new JobOffer(offer))
			);
		});

		const request = httpMock.expectOne(`${apiUrl}`);
		expect(request.request.method).toBe("GET");
		request.flush(dummyOffers);
	});

	it("should fetch a single job offer by ID", () => {
		const dummyOffer: JobOfferDto = {
			id: "1",
			title: "Developer",
			company: "Company A",
			location: "New York",
			salaryRange: { min: 70000, max: 100000 },
			jobType: "Full-time",
			description: "Great job",
			requirements: ["5+ years of experience"],
			responsibilities: ["Develop software"],
			benefits: ["Health insurance"],
			accessibilityFeatures: ["Elevator"],
			postedDate: new Date(),
			expiryDate: new Date(
				new Date().setFullYear(new Date().getFullYear() + 1)
			)
		};

		service.getJobOfferById("1").subscribe((offer) => {
			expect(offer).toEqual(new JobOffer(dummyOffer));
		});

		const request = httpMock.expectOne(`${apiUrl}/1`);
		expect(request.request.method).toBe("GET");
		request.flush(dummyOffer);
	});

	it("should update a job offer", () => {
		const updatedOffer: JobOffer = new JobOffer({
			id: "1",
			title: "Developer",
			company: "Company A",
			location: "New York",
			salaryRange: { min: 70000, max: 100000 },
			jobType: "Full-time",
			description: "Great job",
			requirements: ["5+ years of experience"],
			responsibilities: ["Develop software"],
			benefits: ["Health insurance"],
			accessibilityFeatures: ["Elevator"],
			postedDate: new Date(),
			expiryDate: new Date(
				new Date().setFullYear(new Date().getFullYear() + 1)
			)
		});

		service
			.updateJobOffer(updatedOffer.id, updatedOffer)
			.subscribe((offer) => {
				expect(offer.id).toEqual(updatedOffer.id);
			});

		const request = httpMock.expectOne(`${apiUrl}/1`);
		expect(request.request.method).toBe("PUT");
		request.flush(updatedOffer);
	});

	it("should delete a job offer by ID", () => {
		service.deleteJobOffer("1").subscribe((res) => {
			expect(res).toBeNull(); // or expect nothing, depending on how you handle the response
		});

		const request = httpMock.expectOne(`${apiUrl}/1`);
		expect(request.request.method).toBe("DELETE");
		request.flush(null); // Simulate successful deletion with no content
	});

	it("should delete all job offers", () => {
		service.deleteAllJobOffers().subscribe((res) => {
			expect(res).toBeNull(); // or expect nothing, depending on how you handle the response
		});

		const request = httpMock.expectOne(`${apiUrl}/all`);
		expect(request.request.method).toBe("DELETE");
		request.flush(null); // Simulate successful deletion with no content
	});
});
