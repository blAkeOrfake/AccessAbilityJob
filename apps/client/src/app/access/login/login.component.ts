import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'access-ability-job-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  handleButtonClick() {
    // event handler logic here
  }
}
