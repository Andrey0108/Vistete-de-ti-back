import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'generated/prisma';

export class CreateUserDto {
  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  password: string;

  @ApiProperty({ required: false })
  phone: string;

  @ApiProperty({ required: false, default: 'USER' })
  role?: Role = 'USER';
}
