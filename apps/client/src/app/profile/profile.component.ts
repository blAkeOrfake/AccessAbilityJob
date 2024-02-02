import { Component } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
	selector: "access-ability-job-profile",
	templateUrl: "./profile.component.html",
	styleUrl: "./profile.component.scss"
})
export class ProfileComponent {
	items: MenuItem[] = [
		{
			label: "Basic",
			icon: "pi pi-user",
			routerLink: "basic"
		},
		{
			label: "Favourite offers",
			icon: "pi pi-star",
			routerLink: "favOffers"
		},
		{
			label: "Applied offers",
			icon: "pi pi-check",
			routerLink: "applications"
		},
		{
			label: "Settings",
			icon: "pi pi-cog"
		}
	];

	activeItem: MenuItem = this.items[0];
}
