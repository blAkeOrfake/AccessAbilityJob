import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'access-ability-job-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  constructor(private router: Router) {
  }
  
  handleButtonClick(action: string) {
    // Handle button click event
    console.log(action);
  }

  handleClick(): void {
    this.router.navigate(['/login']);
    console.log('click');
    // Add your event handling logic here
  }
}
