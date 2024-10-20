import { User } from "../entities/user.entity";

export interface IUserRepository {
    create(user: User): Promise<User>;
    readAll(): Promise<User[]>;
    readById(id: number): Promise<User | null>;
    update(id: number, user: Partial<User>): Promise<User | null>;
    delete(id: number): Promise<boolean>;
    findByEmail(email: string): Promise<User | null>;
    findActiveUsers(): Promise<User[]>;
}
