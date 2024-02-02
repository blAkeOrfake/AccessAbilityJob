export enum UserTypeEnum {
	Candidate,
	Employer,
	Admin
}

export interface IUser {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	userType: UserTypeEnum;
	isActive: boolean;
	favOffersIds: string[];
}

export class User implements IUser {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	userType: UserTypeEnum;
	isActive: boolean;
	favOffersIds: string[];

	constructor(user: IUser) {
		this.id = user.id;
		this.firstName = user.firstName;
		this.lastName = user.lastName;
		this.email = user.email;
		this.password = user.password;
		this.userType = user.userType;
		this.isActive = user.isActive;
		this.favOffersIds = user.favOffersIds || [];
	}
}

export interface CreateUserDto {
	email: string;
	password: string;
}

export interface UpdateUserDto {
	name?: string;
	email?: string;
	password?: string;
}
