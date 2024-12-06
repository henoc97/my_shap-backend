import { UserDTO } from "../../../presentation/dtos/user.dto";
import TYPES from "../../containers/types/types";
import { hashPassword } from "../../helper/functions/hash-compare-pwd";
import { toUserEntity } from "../../helper/to.entity/user.to.entity";
import { UserService } from "../../services/user.service";
import { inject, injectable } from "inversify";

@injectable()
export class CreateUserUseCase {
    constructor(@inject(TYPES.UserService) private userService: UserService) { }

    /**
     * Executes the use case to create a new user.
     * @param userDto - The DTO containing user data.
     * @returns The created user.
     */
    async execute(userDto: UserDTO) {
        const user = toUserEntity(userDto);
        user.password = await hashPassword(user.password!);
        return this.userService.createUser(user);
    }
}
