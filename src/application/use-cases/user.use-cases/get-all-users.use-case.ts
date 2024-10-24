import { injectable } from "inversify";
import { UserService } from "../../services/user.service";

@injectable()
export class GetAllUsersUseCase {
    constructor(private userService: UserService) {}

    /**
     * Executes the use case to retrieve all users.
     * @returns A list of all users.
     */
    async execute() {
        return this.userService.getAllUsers();
    }
}
