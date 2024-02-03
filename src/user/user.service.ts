import { Injectable } from '@nestjs/common';
import { UserCreateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';

const result: UserModel[] = [];

@Injectable()
export class UserService {
  getAllUser(): UserModel[] {
    if (result.length == 0) {
      this.creatingMockUser({
        name: 'Omer',
        surname: 'Basri',
        email: 'omerbasri@gmail.com',
        password: '1233216',
        birthday: new Date(),
      });
    }
    return result;
  }

  createUser(body: UserCreateDto) {
    const isExist = result.find((res) => {
      res.email === body.email;
      if (isExist) {
        return isExist;
      } else {
        this.creatingMockUser(body);
        return result.slice(result.length - 1, result.length);
      }
    });
  }

  private creatingMockUser(data: any) {
    const user: UserModel = new UserModel();
    user.name = data.name;
    user.surname = data.surname;
    user.password = data.password;
    user.email = data.email;
    user.birthday = data.birthday;
  }
}
