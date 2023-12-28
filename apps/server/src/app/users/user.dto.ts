import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
export class CreateUserDto {
	@IsNotEmpty()
	@IsString()
	name: string;

	@IsNotEmpty()
	@IsEmail()
	email: string;

	@IsNotEmpty()
	@IsString()
	password: string;
}

export class UpdateUserDto {
	@IsString()
	name?: string;

	@IsEmail()
	email?: string;

	@IsString()
	password?: string;
}
