import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeUserService } from '../../services/fe-user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'access-ability-job-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {

  readonly logoSrc = '../../../assets/Logo_png.png';

  public loggedUser: User | null = null;
  public loggedUser$ = this.userService.getLoggedUserAsObs();
  constructor(
    private router: Router,
    private userService: FeUserService
    ) {
  }

  ngOnInit(): void {
    this.handleDarkMode();

    // this.userService.getLoggedUserAsObs().subscribe(res => {
    //   console.log('observable got', res);
    //   this.loggedUser = res;
    // })

    // setInterval(() => {
    //   this.loggedUser = this.userService.getLoggedUser();

    //   console.log('currentUser', this.loggedUser);
    // }, 5000);
  }
  
  handleButtonClick(action: string) {
    // Handle button click event
    console.log(action);
  }

  logoClicked(): void {
    this.router.navigate(['/']);
  }

  handleClick(): void {
    this.router.navigate(['/login']);
    console.log('click');
    // Add your event handling logic here
  }

  logoutBtnClicked(): void {
    this.userService.logout();
  }

  handleDarkMode() {
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    
    // Change the icons inside the button based on previous settings
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        themeToggleLightIcon?.classList.remove('hidden');
    } else {
        themeToggleDarkIcon?.classList.remove('hidden');
    }
    
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    themeToggleBtn?.addEventListener('click', function() {
    
      console.log('click');
        // toggle icons inside button
        themeToggleDarkIcon?.classList.toggle('hidden');
        themeToggleLightIcon?.classList.toggle('hidden');
    
        // if set via local storage previously
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }
    
        // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
        
    });  
  }

  
}
