import { Request, Response } from 'express';

import CreateUserService from '@modules/users/services/CreateUserService';
import UserRepository from '@modules/users/repositories/UserRepository';

export default class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    if (!request.body) {
      return response.json({ error: 'Error' });
    }

    const { name, email, password } = request.body;

    const createUser = new CreateUserService(new UserRepository());

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    return response.json(user);
  }
}
