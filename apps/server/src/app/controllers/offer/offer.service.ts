import { Injectable } from '@nestjs/common';
import { JobOffer } from './offer.model';
import { v4 as uuidv4 } from 'uuid';
import getSampleOffersList from './sampleJobOffers';


@Injectable()
export class OfferService {
  private jobOffers: JobOffer[] = [];

  // Create a new job offer
  createJobOffer(jobOfferDto: Omit<JobOffer, 'id'>): JobOffer {
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
    return this.jobOffers.find(offer => offer.id === id);
  }

  // Update a job offer
  updateJobOffer(id: string, jobOfferDto: Omit<JobOffer, 'id'>): JobOffer {
    const jobOfferIndex = this.jobOffers.findIndex(offer => offer.id === id);
    if (jobOfferIndex === -1) {
      throw new Error('Job offer not found');
    }

    this.jobOffers[jobOfferIndex] = { id, ...jobOfferDto };
    return this.jobOffers[jobOfferIndex];
  }

  // Delete a job offer
  deleteJobOffer(id: string): void {
    const jobOfferIndex = this.jobOffers.findIndex(offer => offer.id === id);
    if (jobOfferIndex === -1) {
      throw new Error('Job offer not found');
    }

    this.jobOffers.splice(jobOfferIndex, 1);
  }

  deleteAllJobOffers(): void {
    this.jobOffers = [];
  }

  createSampleJobOffers(): void {
    const offersToPaste = getSampleOffersList();
    offersToPaste.forEach(offer => {
      this.createJobOffer(offer as unknown as Omit<JobOffer, 'id'>);
    });
  }
  // This method would typically retrieve data from a database
  // getOffers() {
  //   // Mocked list of orders for example purposes
  //   return [
  //     { id: 1, item: 'Item 1', quantity: 1, price: 100 },
  //     { id: 2, item: 'Item 2', quantity: 2, price: 200 },
  //     // ... other orders ...
  //   ];
  // }

  /**
   * Final details
Keep in mind the following:

You can use only classes not interfacees
You need to append a .dto.ts or .entity.ts unless you change that
Thanks for reading!
   * 
   * 
   * */
}