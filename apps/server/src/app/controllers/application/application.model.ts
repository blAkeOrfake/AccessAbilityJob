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

export class JobApplication {
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
