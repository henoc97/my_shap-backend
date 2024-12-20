import { User } from "../entities/user.entity";

export interface IUserRepository {
    create(user: User): Promise<User>;
    getAll(): Promise<User[]>;
    getById(id: number): Promise<User | null>;
    update(id: number, user: Partial<User>): Promise<User | null>;
    delete(id: number): Promise<boolean>;
    findByEmail(email: string): Promise<User | null>;
    findByContact(countryCode: string, contact: string): Promise<User | null>;
    findActiveUsers(): Promise<User[]>;
    findUserContact(id: number): Promise<{ countryCode: string | undefined; contact: string | undefined }>;
    isUserByContact(countryCode: string, contact: string): Promise<boolean>;
}
