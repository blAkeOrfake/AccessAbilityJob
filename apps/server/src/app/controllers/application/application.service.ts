import { Injectable, NotFoundException } from "@nestjs/common";

import { v4 as uuidv4 } from "uuid";
import { IJobApplication, JobApplication } from "./application.model";

@Injectable()
export class JobApplicationService {
	private jobApplications: JobApplication[] = [];

	createJobApplication(
		jobApplicationDto: Omit<IJobApplication, "id">
	): JobApplication {
		const jobApplication: JobApplication = {
			id: uuidv4(),
			...jobApplicationDto,
			startDate: new Date(jobApplicationDto.startDate).toISOString(), // Assuming startDate is provided in a compatible format
			interviewDate: jobApplicationDto.interviewDate
				? new Date(jobApplicationDto.interviewDate).toISOString()
				: null
		};
		this.jobApplications.push(jobApplication);
		return jobApplication;
	}

	getAllJobApplications(): JobApplication[] {
		return this.jobApplications;
	}

	getJobApplicationById(id: string): JobApplication {
		const jobApplication = this.jobApplications.find(
			(app) => app.id === id
		);
		if (!jobApplication) {
			throw new NotFoundException(
				`Job Application with ID "${id}" not found`
			);
		}
		return jobApplication;
	}

	updateJobApplication(
		id: string,
		jobApplicationDto: Omit<IJobApplication, "id">
	): JobApplication {
		const jobApplicationIndex = this.jobApplications.findIndex(
			(app) => app.id === id
		);
		if (jobApplicationIndex === -1) {
			throw new NotFoundException(
				`Job Application with ID "${id}" not found`
			);
		}
		// Note: Directly assigning new Date() objects, consider adjusting as necessary for your application logic
		this.jobApplications[jobApplicationIndex] = {
			...this.jobApplications[jobApplicationIndex],
			...jobApplicationDto,
			startDate: new Date(jobApplicationDto.startDate).toISOString(),
			interviewDate: jobApplicationDto.interviewDate
				? new Date(jobApplicationDto.interviewDate).toISOString()
				: null
		};
		return this.jobApplications[jobApplicationIndex];
	}

	deleteJobApplication(id: string): void {
		const jobApplicationIndex = this.jobApplications.findIndex(
			(app) => app.id === id
		);
		if (jobApplicationIndex === -1) {
			throw new NotFoundException(
				`Job Application with ID "${id}" not found`
			);
		}
		this.jobApplications.splice(jobApplicationIndex, 1);
	}
}
