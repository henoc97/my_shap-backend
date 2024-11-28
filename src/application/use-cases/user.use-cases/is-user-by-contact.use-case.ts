import TYPES from "../../containers/types/types";
import { UserService } from "../../services/user.service";
import { inject, injectable } from "inversify";

@injectable()
export class IsUserByContactUseCase {
    constructor(@inject(TYPES.UserService) private userService: UserService) { }

    /**
     * Executes the use case to know is a user exist.
     * @param countryCode - The country code of the user to find.
     * @param contact - The contact of the user to find.
     * @returns True or false if user exist with the specified params.
     */
    async execute(countryCode: string, contact: string) {
        return this.userService.isUserByContact(countryCode, contact);
    }
}