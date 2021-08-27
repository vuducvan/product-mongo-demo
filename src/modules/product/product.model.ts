import { IProduct } from './interfaces/product.interface';
import { Document } from 'mongoose';

export interface IProductModel extends Document, IProduct {}
