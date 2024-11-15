import { inject, injectable } from "inversify";
import { UserService } from "../../services/user.service";
import TYPES from "../../containers/types/types";

@injectable()
export class GetAllUsersUseCase {
    constructor(@inject(TYPES.UserService) private userService: UserService) { }

    /**
     * Executes the use case to retrieve all users.
     * @returns A list of all users.
     */
    async execute() {
        return this.userService.getAllUsers();
    }
}
