import TYPES from "../../containers/types/types";
import { UserService } from "../../services/user.service";
import { inject, injectable } from "inversify";

@injectable()
export class FindUserByEmailUseCase {
    constructor(@inject(TYPES.UserService) private userService: UserService) { }

    /**
     * Executes the use case to find a user by email.
     * @param email - The email of the user to find.
     * @returns The user with the specified email.
     */
    async execute(email: string) {
        return this.userService.findUserByEmail(email);
    }
}