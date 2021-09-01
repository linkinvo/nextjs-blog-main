import { Model, DataTypes, BuildOptions } from "sequelize";
import { IContextContainer } from "./../container";

interface IProperties extends Model {
  id: number;
  img: string;
  description: string;
  rating: number;
  price: number;
  beds: number;
  baths: number;
  createdAt: BigInt;
  updatedAt: BigInt;
  userId: number;
}

export type PropertiesType = typeof Model & {
  new (values?: object, options?: BuildOptions): IProperties;
  initModel(): void;
};

export default (ctx: IContextContainer) => {
  
  const Properties = <PropertiesType>ctx.db.define("properties", {
    id: {allowNull: false,autoIncrement: true,primaryKey: true,type: DataTypes.INTEGER,},
    img: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    rating: { type: DataTypes.INTEGER, defaultValue: 0 },
    price: { type: DataTypes.INTEGER, allowNull: false },
    beds: { type: DataTypes.INTEGER, allowNull: false },
    createdAt: { type: DataTypes.BIGINT, allowNull: false },
    updatedAt: { type: DataTypes.BIGINT, allowNull: false },
    userId: { type: DataTypes.INTEGER },
  },{
    timestamps: false,
  });

  Properties.initModel = () => {
    Properties.belongsTo(ctx.User);
    
    Properties.hasMany(ctx.Reviews, {
      sourceKey: 'id',
      foreignKey: 'propertiesId',
      onDelete: 'CASCADE',
    });
  }

  return Properties;
};
