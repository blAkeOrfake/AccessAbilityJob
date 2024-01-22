import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IJobOffer, JobOffer } from '../models/job-offer.model';

@Component({
  selector: 'access-ability-job-offers-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offers-list.component.html',
  styleUrl: './offers-list.component.scss',
})
export class OffersListComponent implements OnInit {

  private offers: JobOffer[] = [];
  constructor() { }

  ngOnInit(): void {
    // get offers from service.
    // start from creating model on backend and frontend one should be the same as backend
    
  }

}
