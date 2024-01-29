export enum UserTypeEnum {
	Candidate,
	Employer,
	Admin
}

export interface IUser {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	userType: UserTypeEnum;
	isActive: boolean;
}

export class User implements IUser {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	userType: UserTypeEnum;
	isActive: boolean;

	constructor(user: IUser) {
		this.id = user.id;
		this.firstName = user.firstName;
		this.lastName = user.lastName;
		this.email = user.email;
		this.password = user.password;
		this.userType = user.userType;
		this.isActive = user.isActive;
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
