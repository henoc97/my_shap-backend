import { UserService } from "../../services/user.service";

export class DeleteUserUseCase {
    constructor(private userService: UserService) {}

    /**
     * Executes the use case to delete a user.
     * @param id - The ID of the user to delete.
     * @returns A boolean indicating if the deletion was successful.
     */
    async execute(id: number) {
        return this.userService.deleteUser(id);
    }
}