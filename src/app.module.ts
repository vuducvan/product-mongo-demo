import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
@Module({
  imports: [
    AuthModule,
    UsersModule,
    ProductModule,
    MongooseModule.forRoot('mongodb://localhost/product-demo'),
  ],
})
export class AppModule {}
