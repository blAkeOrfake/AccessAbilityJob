export interface IJobApplication {
	id: string;
	firstName: string;
	lastName: string;
	company: string;
	email: string;
	phoneNumber: string;
	appliedPosition: string;
	startDate: string;
	interviewDate: string;
	coverLetter: string;
	status: string;

	jobOfferId: string;
	userId: string;
}

export class JobApplication implements IJobApplication {
	id: string;
	firstName: string;
	lastName: string;
	company: string;
	email: string;
	phoneNumber: string;
	appliedPosition: string;
	startDate: string;
	interviewDate: string;
	coverLetter: string;
	status: string;

	jobOfferId: string;
	userId: string;

	constructor(jobApplication: IJobApplication) {
		this.id = jobApplication.id;
		this.firstName = jobApplication.firstName;
		this.lastName = jobApplication.lastName;
		this.company = jobApplication.company;
		this.email = jobApplication.email;
		this.phoneNumber = jobApplication.phoneNumber;
		this.appliedPosition = jobApplication.appliedPosition;
		this.startDate = jobApplication.startDate;
		this.interviewDate = jobApplication.interviewDate;
		this.coverLetter = jobApplication.coverLetter;
		this.status = jobApplication.status;
		this.jobOfferId = jobApplication.jobOfferId;
		this.userId = jobApplication.userId;
	}
}
