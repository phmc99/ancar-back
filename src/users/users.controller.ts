import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(@Query('page') page: string, @Query('take') take: string) {
    return this.usersService.findAll({ page, take });
  }

  @Get(':cod')
  findOne(@Param('cod') cod: string) {
    return this.usersService.findOne(cod);
  }

  @Patch(':cod')
  update(@Param('cod') cod: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(cod, updateUserDto);
  }

  @Delete(':cod')
  remove(@Param('cod') cod: string) {
    return this.usersService.remove(cod);
  }
}
