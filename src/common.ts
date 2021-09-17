export interface IIdentity {
    id: any;
    token?: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    phone: string
}

export interface IProperty {
    id?: number;
    description?: string;
    beds?: string;
    baths?: string;
    userId?: number;
    price?: number;
    rating?: number;
    img?: string;
    createdAt?: number;
    updatedAt?: number;
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

export enum ENTITIES {
    USERS = 'users',
}


// export interface SagaAction {
//     saga: () => void;
//     trigger: (data: any) => void;
// }
// export interface ISagaAction {
//     [entity: string]: {
//         [action: string]: {
//             saga?: () => void;
//             trigger: (data: any) => void;  //Dispatching actions
//         },
//     };
// }

export const isEmpty = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object