import { Component } from "@angular/core";
import { JobApplication } from "../../../models/job-application.model";
import { FeJobApplicationService } from "../../../services/fe-applications.service";
import { FeUserService } from "../../../services/fe-user.service";
import { User, UserTypeEnum } from "../../../models/user.model";

@Component({
	selector: "access-ability-job-applications",
	templateUrl: "./applications.component.html",
	styleUrl: "./applications.component.scss"
})
export class ApplicationsComponent {
	readonly UserTypeEnum = UserTypeEnum;
	jobApplications: JobApplication[] = [];
	currentUser: User | null | undefined;

	get filteredApplications(): JobApplication[] {
		return this.jobApplications.filter(
			(application) => application.userId === this.currentUser?.id
		);
	}

	get userType(): UserTypeEnum {
		return this.currentUser?.userType || UserTypeEnum.Candidate;
	}
	constructor(
		private jobApplicationService: FeJobApplicationService,
		private userService: FeUserService
	) {
		this.getCurrentUser();
		this.getApplications();
	}

	getCurrentUser(): void {
		this.currentUser = this.userService.getLoggedUser();
	}

	getApplications(): void {
		this.jobApplicationService
			.getAllJobApplications()
			.subscribe((applications) => {
				this.jobApplications = applications;
			});
	}

	cancelApplication(applicationId: string): void {
		this.jobApplicationService
			.deleteJobApplication(applicationId)
			.subscribe(() => {
				this.getApplications();
			});
	}

	acceptApplication(jobApplication: JobApplication): void {
		this.jobApplicationService
			.updateJobApplication(jobApplication.id, {
				...jobApplication,
				status: "Accepted"
			})
			.subscribe(() => {
				this.getApplications();
			});
	}

	denyApplication(jobApplication: JobApplication): void {
		this.jobApplicationService
			.updateJobApplication(jobApplication.id, {
				...jobApplication,
				status: "Denied"
			})
			.subscribe(() => {
				this.getApplications();
			});
	}
}
