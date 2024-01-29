import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LoginComponent } from './access/login/login.component';
import { AddOfferComponent } from './offers/add-offer/add-offer.component';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { JobDetailComponent } from 'apps/client/src/app/offers/detail/detail.component';
import { OffersComponent } from './offers/offers.component';
import { ProfileComponent } from './profile/profile.component';
import { BasicComponent } from './profile/tabs/basic/basic.component';
import { FavOffersComponent } from './profile/tabs/fav-offers/favOffers.component';
import { ApplicationsComponent } from './profile/tabs/applications/applications.component';

export const appRoutes: Route[] = [
	{
	  path: '',
	  component: NxWelcomeComponent,
	  pathMatch: 'full',
	},
	{
		path: 'login',
		component: LoginComponent,
	},
	{
	  path: 'offers',
	  component: OffersComponent,
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
	},
	{
		path: 'profile',
		component: ProfileComponent,
		children: [
			{
				path: '',
				redirectTo: 'basic',
				pathMatch: 'full'
			},
			{
				path: 'basic',
				component: BasicComponent
			},
			{
				path: 'favOffers',
				component: FavOffersComponent
			},
			{
				path: 'applications',
				component: ApplicationsComponent
			}
		]
	}
  ];