import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, HttpClientModule, RouterModule],
  providers: [ApiService],
  selector: 'access-ability-job-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
      this.apiService.getData().subscribe((data) => {
          console.log('api data: ', data);
      });
  }
}
