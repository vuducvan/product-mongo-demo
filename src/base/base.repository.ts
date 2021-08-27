import { Document } from 'mongoose';
import { EventEmitter } from 'events';
import { PaginateModel } from 'mongoose-paginate-v2';
import {
  BadRequestException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';

export class BaseRepository<T extends Document> extends EventEmitter {
  private primaryKey = '_id';

  constructor(private readonly model: PaginateModel<T>) {
    super();
    this.model = model;
  }

  async create(entity): Promise<T> {
    try {
      const model = await new this.model(entity).save();
      return model;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findById(id: string): Promise<T> {
    const model = await this.model.findById({
      [this.primaryKey]: id,
    });
    if (!model || model.isDelete === 1) {
      throw new NotFoundException(`Not found id: ${id}`);
    }
    return model;
  }

  async findOne(params): Promise<T> {
    const model = await this.model.findOne(params);
    if (!model) {
      throw new NotFoundException('Not Found');
    }
    return model;
  }

  async find(params): Promise<T[]> {
    const models = await this.model.find(params);

    if (!models.length) {
      throw new NotFoundException('Not Found');
    }
    return models;
  }

  async findAll(): Promise<T[]> {
    const models = await this.model.find({
      isDelete: 0,
    });
    if (!models.length) {
      throw new NotFoundException('Not Found');
    }
    return models;
  }

  async createOrUpdate(entity): Promise<T> {
    try {
      let model = await this.findOne({
        [this.primaryKey]: entity[this.primaryKey],
        isDelete: 0,
      });

      if (model === null) {
        model = await new this.model(entity).save();
      } else {
        await model.set(entity).save();
      }

      return model;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  getModel(): PaginateModel<T> {
    return this.model;
  }

  async updateOne(id: string, entity) {
    try {
      let model = await this.findOne({
        [this.primaryKey]: id,
        isDelete: 0,
      });

      if (model === null) {
        model = await new this.model(entity).save();
      } else {
        await model.set(entity).save();
      }

      return model;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async removeOne(id: string) {
    try {
      const model = await this.findOne({
        [this.primaryKey]: id,
        isDelete: 0,
      });

      if (model === null) {
        throw new BadRequestException();
      } else {
        await model
          .set({
            isDelete: 1,
          })
          .save();
      }

      return {
        statusCode: HttpStatus.OK,
        message: 'Remove success',
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
