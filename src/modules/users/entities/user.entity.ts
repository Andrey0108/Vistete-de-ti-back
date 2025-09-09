import { ApiProperty } from '@nestjs/swagger';
import { User } from 'generated/prisma';

type UserWhithoutPassword = Omit<User, 'password'>;

export class UserEntity implements UserWhithoutPassword {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  phone: string | null;

  @ApiProperty()
  role: 'USER' | 'ADMIN';

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
