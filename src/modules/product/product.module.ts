import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';
import { ProductService } from './product.service';
import { ModelName, ProductSchema } from './schemas/product.schema';
import { JwtModule } from '@nestjs/jwt';
import { jwtConst } from '../../const/jwt.const';
import {
  CheckCanCreate,
  CheckCanDelete,
  CheckCanRead,
  CheckCanUpdate,
} from '../../middlewares/checkRole';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule,
    // MongooseModule.forFeature([{ name: 'user', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: ModelName, schema: ProductSchema }]),
    JwtModule.register({
      secret: jwtConst.secret,
      signOptions: { expiresIn: '86400s' },
    }),
  ],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository],
})
export class ProductModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CheckCanCreate)
      .forRoutes({ path: 'products', method: RequestMethod.POST });
    consumer
      .apply(CheckCanRead)
      .forRoutes({ path: 'products', method: RequestMethod.GET });
    consumer
      .apply(CheckCanDelete)
      .forRoutes({ path: 'products/delete*', method: RequestMethod.PATCH });
    consumer
      .apply(CheckCanUpdate)
      .forRoutes({ path: 'products/update*', method: RequestMethod.PATCH });
  }
}
