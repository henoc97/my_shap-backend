import { inject, injectable } from "inversify";
import { UserService } from "../../services/user.service";
import TYPES from "../../containers/types/types";

@injectable()
export class GetUserByIdUseCase {
    constructor(@inject(TYPES.UserService) private userService: UserService) { }

    /**
     * Executes the use case to retrieve a user by ID.
     * @param id - The ID of the user.
     * @returns The user with the specified ID.
     */
    async execute(id: number) {
        return this.userService.getUserById(id);
    }
}