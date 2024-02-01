import { Component } from '@angular/core';
import { FavOffersService } from '../../../services/favOffers.service';
import { JobOffer } from '../../../models/job-offer.model';
import { FeOfferService } from '../../../services/fe-offer.service';

@Component({
  selector: 'access-ability-job-fav-offers',
  templateUrl: './favOffers.component.html',
  styleUrl: './favOffers.component.scss',
})
export class FavOffersComponent {
  allJobOffers: JobOffer[] = [];
  favOffersIds: string[] = [];

  get filteredOffers(): JobOffer[] {
    return this.allJobOffers.filter((offer) => this.favOffersIds.includes(offer.id));
  }
  constructor(
    private favOffersService: FavOffersService,
    private feOffersService: FeOfferService
    ) {
      this.getFavOffers();
      this.getJobOffers();
  }

  removeJobOffer(jobId: string): void {
    this.favOffersService.removeFavOffer(jobId);
    this.getJobOffers();
  }

  removeOfferFromFavourites(jobId: string): void {
    this.favOffersService.removeFavOffer(jobId);
    this.getFavOffers();
  }

  getJobOffers(): void {
   this.feOffersService.getAllJobOffers().subscribe((offers) => {
     this.allJobOffers = offers;
   });
  }

  private getFavOffers(): void {
    this.favOffersIds = this.favOffersService.getFavOffersIds();
  }
}
