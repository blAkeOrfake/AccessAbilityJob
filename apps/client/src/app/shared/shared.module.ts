import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeOfferService } from '../services/fe-offer.service';
import {MatChipsModule} from '@angular/material/chips';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PaginatorModule } from 'primeng/paginator';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ChipFiltersComponent } from './chip-filters/chip-filters.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ChipFiltersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatIconModule,
    MatChipsModule,
    MatSnackBarModule,
    PaginatorModule,
    DropdownModule,
    InputTextModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    AsyncPipe,
  ],
  providers: [ApiService, FeOfferService],
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatDividerModule,
    HeaderComponent,
    FooterComponent,
    ChipFiltersComponent,
    MatChipsModule,
    PaginatorModule,
    DropdownModule,
    InputTextModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    AsyncPipe,
  ],
})
export class SharedModule {}
