export interface IIdentity {
    token: string;
    first_name: string;
    last_name: string;
    email: string;
    role: string;
}

export enum HTTP_METHOD {
    PUT = 'PUT',
    POST = 'POST',
    GET = 'GET',
    DELETE = 'DELETE',
}