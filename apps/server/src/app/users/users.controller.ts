import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';


@Controller('users')
export class UsersController {
	constructor(private readonly userService: UsersService) {}

	@Get()
	findAll() {
		return this.userService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: number) {
		return this.userService.findOne(id);
	}

	@Post()
	create(@Body() createUserDto: CreateUserDto & User) {
		return this.userService.create(createUserDto);
	}

	@Put(':id')
	update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto & User) {
		return this.userService.update(id, updateUserDto);
	}

	@Delete(':id')
	remove(@Param('id') id: number) {
		return this.userService.remove(id);
	}
}
