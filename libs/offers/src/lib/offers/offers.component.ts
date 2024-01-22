/* eslint-disable @nx/enforce-module-boundaries */
import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { SharedModule } from '../../../../../apps/client/src/app/shared/shared.module'
import { FeOfferService } from 'apps/client/src/app/services/fe-offer.service';
import { JobOffer } from 'apps/client/src/app/models/job-offer.model';

@Component({
  selector: 'access-ability-job-offers',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss',
})
export class OffersComponent implements OnInit {
  
    private offers: JobOffer[] = [];
    constructor(
      private jobOfferService: FeOfferService
    ) { }

    get jobOffers(): JobOffer[] {
      return this.offers;
    }
  
    ngOnInit(): void {
      this.jobOfferService.getAllJobOffers().subscribe((offers) => {
        this.offers = offers;
      });
      // get offers from service.
      // start from creating model on backend and frontend one should be the same as backend
      
    }
}
