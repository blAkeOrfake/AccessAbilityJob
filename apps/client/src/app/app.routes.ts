import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LoginComponent } from './access/login/login.component';
import { AddOfferComponent } from './offers/add-offer/add-offer.component';
import { JobDetailComponent } from '@access-ability-job/offers';

export const appRoutes: Route[] = [
	{
	  path: '',
	  component: NxWelcomeComponent,
	  pathMatch: 'full',
	},
	{
		path: 'login',
		loadComponent: () =>
		  import('./access/login/login.component').then((m) => m.LoginComponent),
	},
	{
	  path: 'offers',
	  loadComponent: () =>
		import('@access-ability-job/offers').then((m) => m.OffersComponent)
	},
	{
		path: 'offers/detail/:id',
		component: JobDetailComponent
	},
	{
		path: 'offers/add',
		component: AddOfferComponent
	  },
	{
		path: 'users',
		loadComponent: () =>
		  import('@access-ability-job/users').then((m) => m.UsersComponent),
	}
  ];