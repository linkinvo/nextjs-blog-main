const mysql2 = require("mysql2");
import * as awilix from 'awilix';

import {Sequelize} from 'sequelize';
import config from "../config";
import modelContainer, { IModelContainer } from './models';


export interface IContextContainer extends IModelContainer {
  config: any;
  db: Sequelize;
}

const container = awilix.createContainer<IContextContainer>({
  injectionMode: awilix.InjectionMode.PROXY,
});

const createDB = (ctx: IContextContainer) => {
  return new Sequelize(
      ctx.config.db.database,
      ctx.config.db.username,
      ctx.config.db.password,
      {
          dialect: ctx.config.db.dialect,
          dialectModule: mysql2,
      }
  );
}

container.register({
  ...modelContainer,
  config: awilix.asValue(config),
  db: awilix.asFunction(createDB).singleton(),

});

// container.loadModules(['models/**/*.ts'], {
//     resolverOptions: {
//       injectionMode: awilix.InjectionMode.PROXY,
//       register: awilix.asFunction,
//       lifetime: awilix.Lifetime.SINGLETON
//     },
//     cwd: __dirname,
//     //formatName: 'camelCase',
//   }, 
//   )
  

export default container;