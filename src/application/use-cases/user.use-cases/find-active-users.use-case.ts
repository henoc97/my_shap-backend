import { UserService } from "../../services/user.service";

export class FindActiveUsersUseCase {
    constructor(private userService: UserService) {}

    /**
     * Executes the use case to find active users.
     * @returns A list of active users.
     */
    async execute() {
        return this.userService.findActiveUsers();
    }
}