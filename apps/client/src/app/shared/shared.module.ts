import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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




@NgModule({
  declarations: [HeaderComponent, FooterComponent],
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
    InputTextModule
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
    MatChipsModule,
    PaginatorModule,
    DropdownModule,
    InputTextModule
  ],
})
export class SharedModule {}
