import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;
const ModelName = 'user';

const AccountSchema = new Schema({
  username: String,
  password: String,
});

const PermissionSchema = new Schema({
  canCreate: Number,
  canRead: Number,
  canUpdate: Number,
  canDelete: Number,
  url: String,
});

const UserSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  account: AccountSchema,
  role: String,
  permission: PermissionSchema,
  isDelete: Number,
});

UserSchema.plugin(mongoosePaginate);
export { UserSchema, ModelName };
