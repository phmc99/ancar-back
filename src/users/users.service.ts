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

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    const users = this.usersRepository.find();
    return { users };
  }

  findOne(cod: string) {
    const user = this.usersRepository.findOneBy({ cod });
    return { user };
  }

  update(cod: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${cod} user`;
  }

  async remove(cod: string) {
    await this.usersRepository.delete(cod);
  }
}
