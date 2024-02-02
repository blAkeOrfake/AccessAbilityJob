import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { FeUserService } from "./fe-user.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { FeOfferService } from "./fe-offer.service";

@Injectable({
	providedIn: "root"
})
export class FavOffersService {
	constructor(
		private userService: FeUserService,
		private feOfferService: FeOfferService,
		private _matSnackBar: MatSnackBar
	) {}

	getUser(): User | null {
		return this.userService.getLoggedUser();
	}

	getFavOffersIds(): string[] {
		const user = this.getUser();
		if (!user || !user.favOffersIds) return [];
		return user.favOffersIds;
	}

	addFavOffer(offerId: string): void {
		const user = this.getUser();
		if (!user) return;

		if (user.favOffersIds.includes(offerId)) {
			this._matSnackBar.open("Offer already in favorites", "", {
				duration: 5000
			});
			return;
		}
		user.favOffersIds.push(offerId);
		this.userService.updateUser(user.id, user).subscribe(() => {
			this._matSnackBar.open("Offer added to favorites", "", {
				duration: 5000,
				panelClass: ["snackbar-success"]
			});
		});
	}

	removeFavOffer(offerId: string): void {
		const user = this.getUser();
		if (!user) return;

		const index = user.favOffersIds.indexOf(offerId);
		if (index !== -1) {
			user.favOffersIds.splice(index, 1);
			this.userService.updateUser(user.id, user).subscribe(() => {
				this._matSnackBar.open("Offer removed from favorites", "", {
					duration: 5000,
					panelClass: ["snackbar-success"]
				});
			});
		}
	}
}
