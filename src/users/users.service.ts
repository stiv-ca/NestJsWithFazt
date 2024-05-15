import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

    private users:any[] = [
        {
            id: 1,
            name: 'david',
            phone: '12345'
        },
        {
            id: 2,
            name: 'carlos',
            phone: '54321'
        } 
    ]
    getUsers() {
        return this.users
    }

    createUser(user:CreateUserDto) {

        this.users.push(user);

        return {
            ...user,
            id: this.users.length + 1,
        }
    }
}
