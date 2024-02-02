import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, FormArray } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import { JobOffer } from "../../models/job-offer.model";
import jobOfferDetails from "../../shared/sample-data/sample-job-details";
import { FeOfferService } from "../../services/fe-offer.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
	selector: "access-ability-job-add-offer",
	standalone: true,
	imports: [SharedModule],
	templateUrl: "./add-offer.component.html",
	styleUrl: "./add-offer.component.scss"
})
export class AddOfferComponent implements OnInit {
	jobOfferForm!: FormGroup;
	constructor(
		private fb: FormBuilder,
		private offerService: FeOfferService,
		private _snackBar: MatSnackBar
	) {}

	ngOnInit() {
		this.jobOfferForm = this.fb.group({
			title: [""],
			company: [""],
			location: [""],
			salaryRange: this.fb.group({
				min: [""],
				max: [""]
			}),
			jobType: [""],
			description: [""],
			requirements: this.fb.array([]),
			responsibilities: this.fb.array([]),
			benefits: this.fb.array([]),
			accessibilityFeatures: this.fb.array([]),
			postedDate: [""],
			expiryDate: [""]
		});
	}
	get requirementsArray(): FormArray {
		return this.jobOfferForm.get("requirements") as FormArray;
	}

	addRequirement() {
		this.requirementsArray.push(new FormControl(""));
	}

	removeRequirement(index: number) {
		this.requirementsArray.removeAt(index);
	}

	get responsibilitiesArray(): FormArray {
		return this.jobOfferForm.get("responsibilities") as FormArray;
	}

	addResponsibility() {
		this.responsibilitiesArray.push(new FormControl(""));
	}

	removeResponsibility(index: number) {
		this.responsibilitiesArray.removeAt(index);
	}

	get benefitsArray(): FormArray {
		return this.jobOfferForm.get("benefits") as FormArray;
	}

	addBenefit() {
		this.benefitsArray.push(new FormControl(""));
	}

	removeBenefit(index: number) {
		this.benefitsArray.removeAt(index);
	}

	get accessibilityFeaturesArray(): FormArray {
		return this.jobOfferForm.get("accessibilityFeatures") as FormArray;
	}

	addAccessibilityFeature() {
		this.accessibilityFeaturesArray.push(new FormControl(""));
	}

	removeAccessibilityFeature(index: number) {
		this.accessibilityFeaturesArray.removeAt(index);
	}

	onSubmit() {
		if (this.jobOfferForm.valid) {
			const jobOfferData: JobOffer = this.jobOfferForm.value;

			this.offerService.createJobOffer(jobOfferData).subscribe(
				() => {
					this._snackBar.open(
						"Job offer added successfully",
						"Go to details",
						{ duration: 5000 }
					);
				},
				(error) => {
					console.error(error);
					this._snackBar.open("Error: " + error, undefined, {
						duration: 5000
					});
				}
			);
		}
	}

	// Randomly generate a job offer
	// Utility function to get a random element from an array
	private getRandomOption(options: string[]): string {
		return options[Math.floor(Math.random() * options.length)];
	}

	// Function to fill the form with random data
	fillWithRandomData() {
		this.jobOfferForm.patchValue({
			title: `Random Title ${Math.floor(Math.random() * 100)}`,
			company: `Random Company ${Math.floor(Math.random() * 100)}`,
			location: `Random Location ${Math.floor(Math.random() * 100)}`,
			salaryRange: {
				min: Math.floor(Math.random() * 100),
				max: Math.floor(Math.random() * 100)
			},
			jobType: `Random Job Type ${Math.floor(Math.random() * 100)}`,
			description: `Random Description ${Math.floor(
				Math.random() * 100
			)}`,
			expiryDate: new Date()
		});

		const requirements = this.jobOfferForm.get("requirements") as FormArray;
		requirements.clear();
		for (let i = 0; i < 3; i++) {
			// Wrap the random option in a FormControl
			const randomRequirement = new FormControl(
				this.getRandomOption(jobOfferDetails.requirements)
			);
			requirements.push(randomRequirement);
		}

		const responsibilities = this.jobOfferForm.get(
			"responsibilities"
		) as FormArray;
		responsibilities.clear();
		for (let i = 0; i < 3; i++) {
			const randomResponsibility = new FormControl(
				this.getRandomOption(jobOfferDetails.responsibilities)
			);
			responsibilities.push(randomResponsibility);
		}

		const benefits = this.jobOfferForm.get("benefits") as FormArray;
		benefits.clear();
		for (let i = 0; i < 3; i++) {
			const randomBenefit = new FormControl(
				this.getRandomOption(jobOfferDetails.benefits)
			);
			benefits.push(randomBenefit);
		}

		const accessibilityFeatures = this.jobOfferForm.get(
			"accessibilityFeatures"
		) as FormArray;
		accessibilityFeatures.clear();
		for (let i = 0; i < 3; i++) {
			const randomAccessibilityFeature = new FormControl(
				this.getRandomOption(jobOfferDetails.accessibilityFeatures)
			);
			accessibilityFeatures.push(randomAccessibilityFeature);
		}
	}
}
