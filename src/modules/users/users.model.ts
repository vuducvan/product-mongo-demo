import { IUser } from './interfaces/user.interface';
import { Document } from 'mongoose';

export interface IUserModel extends Document, IUser {}
