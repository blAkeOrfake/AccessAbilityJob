import { Injectable } from "@nestjs/common";
import { JobOffer } from "./offer.model";
import { v4 as uuidv4 } from "uuid";
import getSampleOffersList from "./sampleJobOffers";

@Injectable()
export class OfferService {
	private jobOffers: JobOffer[] = [];

	// Create a new job offer
	createJobOffer(jobOfferDto: Omit<JobOffer, "id">): JobOffer {
		const jobOffer: JobOffer = {
			id: uuidv4(),
			...jobOfferDto
		};
		jobOffer.postedDate = new Date();

		this.jobOffers.push(jobOffer);
		return jobOffer;
	}

	// Retrieve all job offers
	getAllJobOffers(): JobOffer[] {
		return this.jobOffers;
	}

	// Retrieve a single job offer by ID
	getJobOfferById(id: string): JobOffer {
		return this.jobOffers.find((offer) => offer.id === id);
	}

	// Update a job offer
	updateJobOffer(id: string, jobOfferDto: Omit<JobOffer, "id">): JobOffer {
		const jobOfferIndex = this.jobOffers.findIndex(
			(offer) => offer.id === id
		);
		if (jobOfferIndex === -1) {
			throw new Error("Job offer not found");
		}

		this.jobOffers[jobOfferIndex] = { id, ...jobOfferDto };
		return this.jobOffers[jobOfferIndex];
	}

	// Delete a job offer
	deleteJobOffer(id: string): void {
		const jobOfferIndex = this.jobOffers.findIndex(
			(offer) => offer.id === id
		);
		if (jobOfferIndex === -1) {
			throw new Error("Job offer not found");
		}

		this.jobOffers.splice(jobOfferIndex, 1);
	}

	deleteAllJobOffers(): void {
		this.jobOffers = [];
	}

	createSampleJobOffers(): void {
		const offersToPaste = getSampleOffersList();
		offersToPaste.forEach((offer) => {
			this.createJobOffer(offer as unknown as Omit<JobOffer, "id">);
		});
	}
}
