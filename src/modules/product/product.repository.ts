import { IProductModel } from './product.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModelName } from './schemas/product.schema';
import { BaseRepository } from '../../base/base.repository';

@Injectable()
export class ProductRepository extends BaseRepository<IProductModel> {
  constructor(@InjectModel(ModelName) model) {
    super(model);
  }
}
