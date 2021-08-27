import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';
import { IUser } from './interfaces/user.interface';
import { UsersService } from './users.service';

@ApiTags('User')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @ApiOperation({
    operationId: 'GetAllUser',
    description: 'get all user',
  })
  @Get()
  findAll(): Promise<IUser[]> {
    return this.userService.findAll();
  }

  @ApiOperation({
    operationId: 'GetUserById',
    description: 'get user by Id',
  })
  @Get('/:id')
  findById(@Param('id') id: string): Promise<IUser> {
    return this.userService.findById(id);
  }

  @ApiOperation({
    operationId: 'CreateOneUser',
    description: 'Create a new user',
  })
  @Post()
  create(@Body() body: UserDto): Promise<IUser> {
    return this.userService.createOne(body);
  }

  @ApiOperation({
    operationId: 'UpdateOneUser',
    description: 'Update one user',
  })
  @Patch('/update/:id')
  updateOne(@Param('id') id: string, @Body() body: UserDto) {
    return this.userService.updateOne(id, body);
  }

  @ApiOperation({
    operationId: 'RemoveOneUser',
    description: 'Remove one user',
  })
  @Patch('/delete/:id')
  removeOne(@Param('id') id: string) {
    return this.userService.removeOne(id);
  }
}
