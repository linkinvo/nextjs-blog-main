
import bcrypt from "bcrypt";
import { Model, DataTypes, BuildOptions } from 'sequelize';
// import { createGunzip } from 'zlib';

import { IContextContainer } from '../container';


interface IUser extends Model {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    phone: string;
    role: string;
    createdAt: BigInt;
    updatedAt: BigInt;
}

export type UserType = typeof Model & {
    new (values?: object, options?: BuildOptions): IUser;
    initModel(): void;
}

export default (ctx: IContextContainer) => {
  const User = <UserType>ctx.db.define("users", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 255],
          msg: "First Name must be between 6 and 255 characters in length",
        },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 255],
          msg: "Last Name must be between 6 and 255 characters in length",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [6, 255],
          msg: "Email address must be between 6 and 255 characters in length",
        },
        isEmail: {
          msg: "Email address must be valid",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 255],
          msg: "Password must be between 6 and 255 characters in length",
        },
      },
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "CLIENT",
    },

    createdAt: {
      allowNull: false,
      type: DataTypes.BIGINT,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.BIGINT,
    },
  });

  // User.beforeSave(async User => {
  //     try {
  //         if (User.changed('password')) {
  //             const salt = await bcrypt.genSalt(10);
  //             const hash = await bcrypt.hash(User.password, salt);
  //             User.password = hash;
  //         }
  //     } catch (err) {
  //         throw new Error(err);
  //     }
  // });

  User.initModel = () => {
    //User.belongsToMany(ctx.Properties, {through: ctx.Reviews })

    User.hasMany(ctx.Properties, {
      sourceKey: "id",
      foreignKey: "userId",
      onDelete: "CASCADE",
      as: "properties",
    });

    //User.belongsTo(ctx.Properties);

    User.hasMany(ctx.Reviews, {
      sourceKey: "id",
      foreignKey: "userId",
      onDelete: "CASCADE",
      as: "reviews",
    });
  };

  return User;
};