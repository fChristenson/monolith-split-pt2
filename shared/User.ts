import { UserId } from "../monolith/src/libs/User";

export interface IUserViewModel {
  id: UserId;
  name: string;
  email: string;
  address: string;
}
