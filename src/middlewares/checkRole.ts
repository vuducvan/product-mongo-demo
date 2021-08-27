import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';
import {
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from '../modules/users/users.service';
import { IToken } from './interfaces/token.interface';

@Injectable()
export class CheckCanCreate implements NestMiddleware {
  private userId = 'userId';
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.header('token');
      const payload: IToken = await this.jwtService.verifyAsync(token);
      let check = false;
      const roleCheck = await this.userService.find(payload.userId);
      for (const x in roleCheck) {
        if (
          !check &&
          roleCheck[x].permission.canCreate &&
          req.originalUrl.startsWith(roleCheck[x].permission.url)
        ) {
          check = true;
        }
      }
      if (!check) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'Permission deny',
          },
          403,
        );
      } else {
        req[this.userId] = payload.userId;
        // req.userId = payload.userId; //return a userId to response to update createBy, updateBy fields
        next();
      }
    } catch (error) {
      throw error;
    }
  }
}

@Injectable()
export class CheckCanRead implements NestMiddleware {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.header('token');
      const payload: IToken = await this.jwtService.verifyAsync(token);
      let check = false;
      const roleCheck = await this.userService.find(payload.userId);
      for (const x in roleCheck) {
        if (
          !check &&
          roleCheck[x].permission.canRead &&
          req.originalUrl.startsWith(roleCheck[x].permission.url)
        ) {
          check = true;
        }
      }
      if (!check) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'Permission deny',
          },
          403,
        );
      } else {
        // req.userId = payload.userId; //return a userId to response to update createBy, updateBy fields
        next();
      }
    } catch (error) {
      throw error;
    }
  }
}

@Injectable()
export class CheckCanUpdate implements NestMiddleware {
  private userId = 'userId';
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.header('token');
      const payload: IToken = await this.jwtService.verifyAsync(token);
      let check = false;
      const roleCheck = await this.userService.find(payload.userId);
      for (const x in roleCheck) {
        if (
          !check &&
          roleCheck[x].permission.canUpdate &&
          req.originalUrl.startsWith(roleCheck[x].permission.url)
        ) {
          check = true;
        }
      }
      if (!check) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'Permission deny',
          },
          403,
        );
      } else {
        req[this.userId] = payload.userId;
        // req.userId = payload.userId; //return a userId to response to update createBy, updateBy fields
        next();
      }
    } catch (error) {
      throw error;
    }
  }
}

@Injectable()
export class CheckCanDelete implements NestMiddleware {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.header('token');
      const payload: IToken = await this.jwtService.verifyAsync(token);
      let check = false;
      const roleCheck = await this.userService.find(payload.userId);
      for (const x in roleCheck) {
        if (
          !check &&
          roleCheck[x].permission.canDelete &&
          req.originalUrl.startsWith(roleCheck[x].permission.url)
        ) {
          check = true;
        }
      }
      if (!check) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'Permission deny',
          },
          403,
        );
      } else {
        // req.userId = payload.userId; //return a userId to response to update createBy, updateBy fields
        next();
      }
    } catch (error) {
      throw error;
    }
  }
}
