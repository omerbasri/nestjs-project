import { AuditModel } from './audit.model';

export class UserModel {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  passwordHash: string;
  audit: AuditModel;
}
