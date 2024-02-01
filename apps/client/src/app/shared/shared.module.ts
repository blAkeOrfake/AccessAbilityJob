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
import { FeUserService } from '../services/fe-user.service';
import { LoginComponent } from '../access/login/login.component';
import { OffersComponent } from '../offers/offers.component';
import { JobDetailComponent } from '../offers/detail/detail.component';
import { JobTileComponent } from '../offers/tiles/job-tile.component';
import { ProfileComponent } from '../profile/profile.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { FavOffersComponent } from '../profile/tabs/fav-offers/favOffers.component';
import { BasicComponent } from '../profile/tabs/basic/basic.component';
import { ApplicationsComponent } from '../profile/tabs/applications/applications.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FileUploadModule } from 'primeng/fileupload';
import {TableModule} from 'primeng/table';
import { FavOffersService } from '../services/favOffers.service';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ChipFiltersComponent,
    OffersComponent,
    JobDetailComponent,
    JobTileComponent,
    ProfileComponent,
    ApplicationsComponent,
    BasicComponent,
    FavOffersComponent,

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
    TabMenuModule,
    SelectButtonModule,
    FileUploadModule,
    TableModule
  ],
  providers: [ApiService, FeOfferService, FeUserService, FavOffersService],
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
    LoginComponent,
    TabMenuModule,
    ApplicationsComponent,
    BasicComponent,
    FavOffersComponent,
    SelectButtonModule,
    FileUploadModule,
    TableModule
  ],
})
export class SharedModule {}
