declare module "next-auth" {
    export interface User {
        id: number;
        username: string;
        firstName: string;
        lastName: string;
        email: string;
        image: string;
        roleId: number;
        roleName: string;
        birthday: Date;
        createdAt: Date;
    }

    interface Session {
        user: {
            id: number;
            username: string;
            firstName: string;
            lastName: string;
            email: string;
            roleId: number;
            roleName: string;
            birthday: Date;
            createdAt: Date;
        } & DefaultSession["user"]
    }
    
    export interface Credentials {
        username: string;
        password: string;
    }
}

export = Next_Auth;