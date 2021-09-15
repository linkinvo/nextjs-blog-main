
import { ENTITIES } from '../../src/common';
import Entity from "./Entity";

export interface User {
    userToken?: string;
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    role: string;
}

export class UserEntity extends Entity {
    constructor() {
        super(ENTITIES.USERS, {});
    }
}

const userEntity = new UserEntity();
export default userEntity;