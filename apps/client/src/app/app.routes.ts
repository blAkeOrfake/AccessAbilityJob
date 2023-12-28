import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
	{
	  path: '',
	  component: NxWelcomeComponent,
	  pathMatch: 'full',
	},
	{
	  path: 'offers',
	  loadComponent: () =>
		import('@access-ability-job/offers').then((m) => m.OffersComponent),
	},
	{
		path: 'users',
		loadComponent: () =>
		  import('@access-ability-job/users').then((m) => m.UsersComponent),
	}
  ];