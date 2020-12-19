import User from '@modules/users/entities/User';
import UsersRepository from '../repositories/UserRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  constructor(private usersRepository: UsersRepository) {}

  public async execute({
    name,
    email,
    password,
  }: IRequest): Promise<User | string> {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      return 'Error';
    }

    const user = await this.usersRepository.create({
      name,
      email,
      password,
      admin: false,
    });

    return user;
  }
}

export default CreateUserService;
