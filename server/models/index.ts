import * as awilix from 'awilix';
import User, { UserType } from './userModel';
import Properties, {PropertiesType} from './propertiesModel'
import Reviews , {ReviewsType} from './reviewsModel'

export interface IModelContainer {
  // initModels: () => void;
  User: UserType;
  Properties: PropertiesType;
  Reviews: ReviewsType;
}

// const initModels = (ctx: IContextContainer)  => {
//   const { Account, Asset, Company, Fmodel, User } = ctx;
//   return () => {
//       User.init();
//   }
// }

export default {
  // initModels: asFunction(initModels).singleton(),
  User: awilix.asFunction(User).singleton(),
  Properties: awilix.asFunction(Properties).singleton(),
  Reviews: awilix.asFunction(Reviews).singleton(),
  // SiteSetting: awilix.asFunction(SiteSetting).singleton(),
}