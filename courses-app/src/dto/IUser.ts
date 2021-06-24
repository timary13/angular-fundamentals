export interface IUser {
    name: string;
    email: string;
    password: string;
    role: UserRole;
    id: string;
}

export enum UserRole {
    Admin = 'admin',
    User = 'user'
}