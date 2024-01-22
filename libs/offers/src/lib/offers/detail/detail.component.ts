/* eslint-disable @nx/enforce-module-boundaries */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FeOfferService } from 'apps/client/src/app/services/fe-offer.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JobOffer } from 'apps/client/src/app/models/job-offer.model';

@Component({
  selector: 'access-ability-job-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class JobDetailComponent implements OnInit {
  // on navigationend get id from url and get offer from service
  offer: JobOffer | undefined;
  constructor(
    private route: ActivatedRoute,
    private jobOfferService: FeOfferService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (!id) this._snackBar.open('No offer id provided', 'Close', { duration: 3000 });
      this.jobOfferService.getJobOfferById(id as string).subscribe((offer) => {
        this.offer = offer;
      });
    });
  }
}
