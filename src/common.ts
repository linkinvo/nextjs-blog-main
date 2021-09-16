export interface IIdentity {
    id: any;
    token?: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    phone: string
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

export interface SagaAction {
    saga: () => void;
    trigger: (data: any) => void;
}
export interface ISagaAction {
    [entity: string]: {
        [action: string]: {
            saga?: () => void;
            trigger: (data: any) => void;  //Dispatching actions
        },
    };
}

export enum ENTITIES {
    USERS = 'users',
}


export const isEmpty = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object