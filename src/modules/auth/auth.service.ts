import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
@Injectable()
export class AuthService {
  protected primarykey = '_id';
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  //login with username, password in req
  async login(username: string, password: string) {
    const userLogin = await this.userService.findOne(username);
    if (userLogin) {
      //compare pass in request with hashed password in database
      if (await bcrypt.compare(password, userLogin.account.password)) {
        const userId = userLogin[this.primarykey];
        return {
          status: `success`,
          username: userLogin.account.username,
          accessToken: this.jwtService.sign({ userId: userId }),
        };
      }
    }
    return {
      statusCode: HttpStatus.NOT_FOUND,
      message: `username or password is incorrect`,
    };
  }
}
