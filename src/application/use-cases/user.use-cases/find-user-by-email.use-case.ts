import { UserService } from "../../services/user.service";

export class FindUserByEmailUseCase {
    constructor(private userService: UserService) {}

    /**
     * Executes the use case to find a user by email.
     * @param email - The email of the user to find.
     * @returns The user with the specified email.
     */
    async execute(email: string) {
        return this.userService.findUserByEmail(email);
    }
}