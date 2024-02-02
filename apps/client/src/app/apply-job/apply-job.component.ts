import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { FeJobApplicationService } from "../services/fe-applications.service";
import { FeUserService } from "../services/fe-user.service";
import { FeOfferService } from "../services/fe-offer.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { JobApplication } from "../models/job-application.model";

@Component({
	selector: "access-ability-job-apply-job",
	templateUrl: "./apply-job.component.html",
	styleUrl: "./apply-job.component.scss"
})
export class ApplyJobComponent implements OnInit {
	applyForm: FormGroup;
	jobOfferId: string | undefined;

	constructor(
		private jobApplicationService: FeJobApplicationService,
		private userService: FeUserService,
		private jobOfferService: FeOfferService,
		private route: ActivatedRoute,
		private _snackBar: MatSnackBar,
		private router: Router
	) {
		this.applyForm = new FormGroup({
			firstName: new FormControl(""),
			lastName: new FormControl(""),
			company: new FormControl(""),
			email: new FormControl(""),
			phoneNumber: new FormControl(""),
			appliedPosition: new FormControl(""),
			startDate: new FormControl(""),
			interviewDate: new FormControl(""),
			coverLetter: new FormControl("")
		});
	}
	ngOnInit(): void {
		this.route.paramMap.subscribe((params) => {
			const id = params.get("id");
			if (!id)
				this._snackBar.open("No offer id provided", "Close", {
					duration: 3000
				});
			this.jobOfferService
				.getJobOfferById(id as string)
				.subscribe((offer) => {
					this.jobOfferId = offer.id;
					this.applyForm.patchValue({
						company: offer.company,
						appliedPosition: offer.title
					});
				});

			window.scrollTo(0, 0);
		});

		this.getUserInfo();
	}

	private getUserInfo() {
		const user = this.userService.getLoggedUser();
		if (!user) return;
		this.applyForm.patchValue({
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email
		});
	}

	submit() {
		if (this.applyForm.invalid) return;
		console.log("form value", this.applyForm.value);
		const data = new JobApplication({
			...this.applyForm.value,
			status: "Pending",
			userId: this.userService.getLoggedUser()?.id,
			jobOfferId: this.jobOfferId
		});
		this.jobApplicationService.createJobApplication(data).subscribe(() => {
			this.router.navigate(["/profile/applications"]);
		});
	}
}
