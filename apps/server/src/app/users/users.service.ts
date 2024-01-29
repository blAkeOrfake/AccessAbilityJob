import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, UserTypeEnum } from './user.entity';

@Injectable()
export class UsersService {
	private loggedUser: User = null;

  constructor(
	@InjectRepository(User)
	private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
	return this.usersRepository.find();
  }

  findOne(id: number): Promise<User | null> {
	return this.usersRepository.findOneBy({ id });
  }

	async remove(id: number): Promise<void> {
		await this.usersRepository.delete(id);
  	}

create(user: User): Promise<User> {
	user.userType = UserTypeEnum.Candidate;
	return this.usersRepository.save(user);
}

update(id: number, user: User): Promise<User | null> {
	const updatedUser = { id, ...user };
	return this.usersRepository.save(updatedUser);
}

login(email: string, password: string): Promise<User> {
	const user = this.usersRepository.findOne({ where: { email, password } });

	user.then((onfulfilled) => {
		this.loggedUser = onfulfilled
	});
	return user;
}

logout(): Promise<void> {
	delete this.loggedUser;
	return;
}
  
}
