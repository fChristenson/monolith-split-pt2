export interface IUser {
  id: UserId;
  name: string;
  email: string;
  password: string;
  address: string;
  createdAt: string;
}

export type UserId = string;
