import { Model, DataTypes, BuildOptions } from "sequelize";
import { IContextContainer } from "./../container";

interface IReviews extends Model {
  id: number;
  feedback: string;
  createdAt: BigInt;
}

export type ReviewsType = typeof Model & {
  new (values?: object, options?: BuildOptions): IReviews;
  init(): void;
};

export default (ctx: IContextContainer) => {
  const Reviews = <ReviewsType>ctx.db.define("Reviews", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    feedback: { type: DataTypes.TEXT, allowNull: false },
    createdAt: { allowNull: false, type: DataTypes.BIGINT },
  });
  return Reviews;
};