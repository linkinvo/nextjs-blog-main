export interface IIdentity {
    id: any;
    token?: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
}

export enum HTTP_METHOD {
    PUT = 'PUT',
    POST = 'POST',
    GET = 'GET',
    DELETE = 'DELETE',
}

export enum ROLE {
    ADMIN = 'ADMIN',
    CLIENT = 'CLIENT'
}