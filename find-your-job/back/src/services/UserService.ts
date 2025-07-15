import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";

export class UserService {
  private userRepo = AppDataSource.getRepository(User);

  async createUser(data: Partial<User>): Promise<User> {
    const user = this.userRepo.create(data);
    return this.userRepo.save(user);
  }
}
