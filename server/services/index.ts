import * as awilix from 'awilix';

import UserService from './UserService';


export interface IServicesContainer {
    UserService: UserService;
}

export default {
    UserService: awilix.asClass(UserService).singleton(),
}