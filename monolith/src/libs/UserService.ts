import { UserId, IUser } from "./User";

export class UserService {
  getUser(id: UserId): IUser {
    // Pretend we got this from a database
    return {
      id: "id",
      name: "foo",
      email: "foo@bar.se",
      password: "secret",
      address: "street",
      createdAt: new Date().toISOString(),
    };
  }
}
