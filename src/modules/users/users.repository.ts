import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModelName } from './schemas/user.schema';
import { BaseRepository } from '../../base/base.repository';
import { IUserModel } from './users.model';

@Injectable()
export class UserRepository extends BaseRepository<IUserModel> {
  constructor(@InjectModel(ModelName) model) {
    super(model);
  }
}
