export interface IIdentity {
    id: any;
    userToken?: string;
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

export interface IReview {
    id?: number;
    feedback?: string;
    userId?: number;
    propertiesId?: number;
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
    PROPERTIES = 'properties',
    REVIEWS = 'reviews',
    
}



// export interface ISagaAction {
//     [entity: string]: {
//         [action: string]: {
//             saga?: () => void;
//         },
//     };
// }

export const isEmpty = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object