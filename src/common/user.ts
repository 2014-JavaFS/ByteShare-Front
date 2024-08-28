export default interface User {
    userId?: number;
    email: string;
    password: string;
    username: string;
    first_name: string;
    last_name: string;
    userType?: UserType;
}

enum UserType {
    'ADMIN', 'AUTHOR', 'USER'
}

// ? means optional