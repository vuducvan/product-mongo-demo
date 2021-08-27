import { Injectable } from '@nestjs/common';
import { IUser } from './interfaces/user.interface';
import { UserRepository } from './users.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly repo: UserRepository) {}

  async findAll(): Promise<IUser[]> {
    return await this.repo.findAll();
  }

  async findById(id: string): Promise<IUser> {
    return await this.repo.findById(id);
  }

  async createOne(body: IUser): Promise<IUser> {
    const salt = await bcrypt.genSalt(10);
    body.account.password = await bcrypt.hash(body.account.password, salt);
    body.isDelete = 0;
    return await this.repo.create(body);
  }

  async updateOne(id: string, body: IUser): Promise<IUser> {
    return this.repo.updateOne(id, body);
  }

  async removeOne(id: string): Promise<any> {
    return this.repo.removeOne(id);
  }

  async findOne(username: string): Promise<IUser> {
    const params = { 'account.username': username, isDelete: 0 };
    return this.repo.findOne(params);
  }

  async find(id: string): Promise<IUser[]> {
    const params = { _id: id, isDelete: 0 };
    return this.repo.find(params);
  }
}
