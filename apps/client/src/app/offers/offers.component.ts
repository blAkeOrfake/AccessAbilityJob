/* eslint-disable @nx/enforce-module-boundaries */
import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { FeOfferService } from 'apps/client/src/app/services/fe-offer.service';
import { JobOffer } from 'apps/client/src/app/models/job-offer.model';
import { PaginatorState } from 'primeng/paginator';
import { DropdownChangeEvent } from 'primeng/dropdown';
import { FeUserService } from 'apps/client/src/app/services/fe-user.service';

@Component({
  selector: 'access-ability-job-offers',
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss',
})
export class OffersComponent implements OnInit {
  
    public loggedUser$ = this.userService.getLoggedUserAsObs();
    private offers: JobOffer[] = [];
    private _paginationState: PaginatorState = {
      first: 0,
      rows: 10,
      page: 1,
      pageCount: 0
    };

    public readonly sortOptions: { optionLabel: string; optionValue: string; }[] = [{
      optionLabel: 'Newest first',
      optionValue: 'newest'
    }, {
      optionLabel: 'Oldest first',
      optionValue: 'oldest'
    }, {
      optionLabel: 'Highest salary',
      optionValue: 'highest'
    }, {
      optionLabel: 'Lowest salary',
      optionValue: 'lowest'
    }];
    selectedSortOption: { optionLabel: string; optionValue: string; } | null = null;
    selectedSortFn: (a: JobOffer, b: JobOffer) => number = () => 0;

    searchInput = '';

    constructor(
      private jobOfferService: FeOfferService,
      private userService: FeUserService
    ) { }

    get jobOffers(): JobOffer[] {
      return this.offers;
    }

    get filteredOffers(): JobOffer[] {
      const filtered = this.offers.slice(this.paginationState.first, (this.paginationState.first ?? 0) + (this.paginationState.rows ?? 0));
      const filteredByName = this.searchInput ? filtered.filter((offer) => offer.title.toLowerCase().includes(this.searchInput?.toLowerCase() ?? '')) : filtered;
      const sorted = this.selectedSortOption ? filteredByName.sort(this.selectedSortFn) : filteredByName;
      return sorted;
    }

    get paginationState(): {
      first: number;
      rows: number;
      page: number;
      pageCount: number;
    } {
      return this._paginationState as unknown as {
        first: number;
        rows: number;
        page: number;
        pageCount: number;
      };
    }
  
    ngOnInit(): void {
      this.refreshJobOffers();
      // get offers from service.
      // start from creating model on backend and frontend one should be the same as backend
      
    }

    private refreshJobOffers(): void {
      this.jobOfferService.getAllJobOffers().subscribe((offers) => {
        console.log(offers);
        this.offers = offers;
        this.paginationState.pageCount = Math.ceil(this.offers.length / (this.paginationState?.rows ?? 10));
      });
    }

    onSortChange(ev: DropdownChangeEvent): void {
      console.log('sortChanged', ev.value);
      this.selectedSortOption = ev.value;

      if (!ev.value) return;

      switch (ev.value.optionValue) {
        case 'newest':
          this.selectedSortFn = (a, b) => b.postedDate.getTime() - a.postedDate.getTime();
          break;
        case 'oldest':
          this.selectedSortFn = (a, b) => a.postedDate.getTime() - b.postedDate.getTime();
          break;
        case 'highest':
          this.selectedSortFn = (a, b) => b.salaryRange.max - a.salaryRange.max;
          break;
        case 'lowest':
          this.selectedSortFn = (a, b) => a.salaryRange.min - b.salaryRange.min;
          break;
        default:
          this.selectedSortFn = () => 0;
      }
    }

    createSampleOffers(): void {
      this.jobOfferService.createSampleJobOffers().subscribe();
      this.refreshJobOffers();
    }

    clearAllOffers(): void {
      this.jobOfferService.deleteAllJobOffers().subscribe();
      this.refreshJobOffers();
    }

    onPageChange(event: PaginatorState) {
      console.log(event);
      this._paginationState = event;

    }
}
