import axios from "axios";
import { IUserViewModel } from "../../shared/User";

export class UserService {
  getUser(id: string): Promise<IUserViewModel> {
    // Pretend we got this from a database
    return axios
      .get(`http://localhost:3000/api/v1/users/${id}}`)
      .then((d) => d.data);
  }
}
