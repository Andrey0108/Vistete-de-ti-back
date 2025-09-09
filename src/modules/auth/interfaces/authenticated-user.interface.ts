import { Request } from 'express';

export interface AuthenticatedUser {
  idUser: number;
  email: string;
  role: string;
}

export interface AuthenticatedRequest extends Request {
  user: AuthenticatedUser;
}
