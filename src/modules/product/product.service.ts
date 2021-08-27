import { Injectable } from '@nestjs/common';
import { IProduct } from './interfaces/product.interface';
import { ProductRepository } from './product.repository';
@Injectable()
export class ProductService {
  constructor(private readonly repo: ProductRepository) {}

  async findAll(): Promise<IProduct[]> {
    return await this.repo.findAll();
  }

  async findById(id: string): Promise<IProduct> {
    return await this.repo.findById(id);
  }

  async createOne(body: IProduct, req: Request): Promise<IProduct> {
    await this._rebuildBodyCreateRequest(body, req);
    return await this.repo.create(body);
  }

  async updateOne(id: string, body: IProduct, req: Request): Promise<IProduct> {
    const userId = 'userId';
    body.updatedBy = req[userId];
    body.updatedAt = new Date();
    return this.repo.updateOne(id, body);
  }

  async removeOne(id: string): Promise<any> {
    return this.repo.removeOne(id);
  }

  _rebuildBodyCreateRequest(body: IProduct, req: Request) {
    const userId = 'userId';
    body.createdAt = new Date();
    body.createdBy = req[userId];
    body.isDelete = 0;
    return body;
  }
}
