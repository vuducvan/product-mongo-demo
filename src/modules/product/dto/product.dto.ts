import { IsString, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DescriptionDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  lang: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  value: string;
}

export class CategoryDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  name: string;
}

export class ImageDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  high: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  width: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  src: string;
}

export class BranchDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  name: string;
}

export class ShapeDto {
  @ApiProperty({
    type: Number,
  })
  weight: number;

  @ApiProperty({
    type: Number,
  })
  height: number;
}

export class AttributeDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  size: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  color: string;

  @ApiProperty({
    type: [ImageDto],
  })
  image: ImageDto[];

  @ApiProperty({
    type: ShapeDto,
  })
  shape: ShapeDto;

  @ApiProperty()
  @IsString()
  @IsDefined()
  origin: string;
}

export class ProductDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  name: string;

  @ApiProperty({
    type: DescriptionDto,
  })
  description: DescriptionDto;

  @ApiProperty({
    type: CategoryDto,
  })
  category: CategoryDto;

  @ApiProperty({
    type: BranchDto,
  })
  branch: BranchDto;
  @ApiProperty()
  @IsString()
  @IsDefined()
  size: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  color: string;

  @ApiProperty({
    type: [ImageDto],
  })
  image: ImageDto[];

  @ApiProperty({
    type: ShapeDto,
  })
  shape: ShapeDto;

  @ApiProperty()
  @IsString()
  @IsDefined()
  origin: string;

  @ApiProperty({
    type: Number,
  })
  price: number;

  @ApiProperty({
    type: Number,
  })
  amount: number;

  isDelete: number;

  createdAt: Date;

  createdBy: string;

  updatedAt: Date;

  updatedBy: string;
}
