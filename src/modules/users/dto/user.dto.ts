import { IsString, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AccountDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  username: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  password: string;
}

export class PermissionDto {
  @ApiProperty({
    type: Number,
  })
  canCreate: number;

  @ApiProperty({
    type: Number,
  })
  canRead: number;

  @ApiProperty({
    type: Number,
  })
  canUpdate: number;

  @ApiProperty({
    type: Number,
  })
  canDelete: number;

  @ApiProperty()
  @IsString()
  @IsDefined()
  url: string;
}

export class UserDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  name: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  email: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  phone: string;

  @ApiProperty({
    type: AccountDto,
  })
  account: AccountDto;

  @ApiProperty()
  @IsString()
  @IsDefined()
  role: string;

  @ApiProperty({
    type: PermissionDto,
  })
  permission: PermissionDto;

  isDelete: number;
}
