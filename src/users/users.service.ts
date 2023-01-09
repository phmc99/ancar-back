import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import User from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create(createUserDto);
    await this.usersRepository.save(user);
    return { user };
  }

  async findAll() {
    const users = await this.usersRepository.find();
    return { users };
  }

  async findOne(cod: string) {
    const user = await this.usersRepository.findOneBy({ cod });
    return { user };
  }

  async update(cod: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOneBy({ cod });
    const updatedUser = await this.usersRepository.save({
      ...user,
      ...updateUserDto,
    });
    return { updatedUser };
  }

  async remove(cod: string) {
    await this.usersRepository.delete(cod);
    return { message: `user ${cod} deleted` };
  }
}
