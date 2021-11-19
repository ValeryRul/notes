import { UserLoginModel } from './user-login.model';

export interface UserRegistrationModel extends UserLoginModel {
  name: string;
}
