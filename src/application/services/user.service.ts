import { User } from "../../domain/entities/user.entity";
import { IUserRepository } from "../../domain/repositories/user.repository";


export class UserService {
    constructor(private userRepository: IUserRepository) {}

    async createUser(user: User): Promise<User> {
        return this.userRepository.create(user);
    }

    async getAllUsers(): Promise<User[]> {
        return this.userRepository.getAll();
    }

    async getUserById(id: number): Promise<User | null> {
        return this.userRepository.getById(id);
    }

    async updateUser(id: number, user: Partial<User>): Promise<User | null> {
        return this.userRepository.update(id, user);
    }

    async deleteUser(id: number): Promise<boolean> {
        return this.userRepository.delete(id);
    }

    async findUserByEmail(email: string): Promise<User | null> {
        return this.userRepository.findByEmail(email);
    }

    async findActiveUsers(): Promise<User[]> {
        return this.userRepository.findActiveUsers();
    }
}