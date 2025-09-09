import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Public } from './decorators/public.decorator';

@Controller('Login')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  @Public()
  async login(@Body() data: LoginDto) {
    const userToken = await this.authService.validateUser(data);

    if (!userToken)
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    return userToken;
  }
}
//hola
