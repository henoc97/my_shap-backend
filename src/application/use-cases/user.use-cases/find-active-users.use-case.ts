import TYPES from "../../containers/types/types";
import { UserService } from "../../services/user.service";
import { inject, injectable } from "inversify";

@injectable()
export class FindActiveUsersUseCase {
    constructor(@inject(TYPES.UserService) private userService: UserService) { }

    /**
     * Executes the use case to find active users.
     * @returns A list of active users.
     */
    async execute() {
        return this.userService.findActiveUsers();
    }
}