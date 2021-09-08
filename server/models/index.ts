import * as awilix from 'awilix';
import User, { UserType } from './userModel';
import Properties, {PropertiesType} from './propertiesModel'
import Reviews , {ReviewsType} from './reviewsModel'
import { IContextContainer } from '../container';

export interface IModelContainer {
  initModels: () => void;
  User: UserType;
  Properties: PropertiesType;
  Reviews: ReviewsType;
}

const initModels = (ctx: IContextContainer)  => {
  const { Reviews, User, Properties } = ctx;
  return () => {
      User.initModel(),
      Properties.initModel(),
      Reviews.initModel()
  }
}

export default {
  initModels: awilix.asFunction(initModels).singleton(),
  User: awilix.asFunction(User).singleton(),
  Properties: awilix.asFunction(Properties).singleton(),
  Reviews: awilix.asFunction(Reviews).singleton(),
}