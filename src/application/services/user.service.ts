import { inject, injectable } from "inversify";
import { User } from "../../domain/entities/user.entity";
import { IUserRepository } from "../../domain/repositories/user.repository";
import TYPES from "../containers/types/types";

@injectable()
export class UserService {
    constructor(@inject(TYPES.IUserRepository) private userRepository: IUserRepository) { }

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

    async findUserByContact(countryCode: string, contact: string): Promise<User | null> {
        return this.userRepository.findByContact(countryCode, contact);
    }

    async isUserByContact(countryCode: string, contact: string): Promise<boolean> {
        return this.userRepository.isUserByContact(countryCode, contact);
    }

    async findActiveUsers(): Promise<User[]> {
        return this.userRepository.findActiveUsers();
    }

    async findUserContact(id: number): Promise<{ countryCode: string | undefined; contact: string | undefined }> {
        return this.userRepository.findUserContact(id);
    }
}