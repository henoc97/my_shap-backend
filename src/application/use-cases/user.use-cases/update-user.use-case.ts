import { UserService } from "../../services/user.service";
import { User } from "../../../domain/entities/user.entity";
import { inject, injectable } from "inversify";
import TYPES from "../../containers/types/types";

@injectable()
export class UpdateUserUseCase {
    constructor(@inject(TYPES.UserService) private userService: UserService) { }

    /**
     * Executes the use case to update a user.
     * @param id - The ID of the user to update.
     * @param user - The partial user data to update.
     * @returns The updated user.
     */
    async execute(id: number, user: Partial<User>) {
        return this.userService.updateUser(id, user);
    }
}