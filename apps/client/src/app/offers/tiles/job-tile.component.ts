import { Component, Input } from "@angular/core";

@Component({
	selector: "access-ability-job-job-tile",
	templateUrl: "./job-tile.component.html",
	styleUrl: "./job-tile.component.scss"
})
export class JobTileComponent {
	@Input()
	logoSrc!: string;
	@Input()
	iconSrc!: string;
	@Input()
	jobTitle!: string;
	@Input()
	location!: string;
	@Input()
	employmentType!: string;
	@Input()
	workMode!: string;
	@Input()
	description!: string;

	handleButtonClick() {
		// Add your event handler code here
	}
}
