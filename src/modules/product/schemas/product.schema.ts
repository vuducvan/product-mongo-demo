import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;
const ModelName = 'product';

const DescriptionSchema = new Schema({
  lang: String,
  value: String,
});

const CategorySchema = new Schema({
  id: String,
  name: String,
});

const BrandSchema = new Schema({
  id: String,
  name: String,
});

const ImageSchema = new Schema({
  id: String,
  high: String,
  width: String,
  src: String,
});

const ShapeSchema = new Schema({
  weight: Number,
  height: Number,
});

const ProductSchema = new Schema({
  name: String,
  description: DescriptionSchema,
  category: CategorySchema,
  branch: BrandSchema,
  size: String,
  color: String,
  image: [ImageSchema],
  shape: ShapeSchema,
  origin: String,
  price: Number,
  amount: Number,
  isDelete: Number,
  createdAt: Date,
  createdBy: String,
  updatedAt: Date,
  updatedBy: String,
});

ProductSchema.plugin(mongoosePaginate);
export { ProductSchema, ModelName };
