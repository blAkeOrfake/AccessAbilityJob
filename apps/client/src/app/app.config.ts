import { ApplicationConfig } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FeOfferService } from './services/fe-offer.service';
import { FeUserService } from './services/fe-user.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes,withEnabledBlockingInitialNavigation()),
    provideAnimations(),
    {provide: FeOfferService , useClass: FeOfferService},
    {provide: FeUserService , useClass: FeUserService},

  ],
};
