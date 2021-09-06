import BaseContext from "../baseContext";
import passportLocal from 'passport-local';
import { IContextContainer } from "../container";
import { Request } from 'express';

export default class SignInStrategy extends BaseContext {
    private strategyUser: passportLocal.Strategy;

    get strategy() {
        return this.strategyUser;
    }

    constructor(opts: IContextContainer) {
        super(opts);

        this.verifyRequestUser = this.verifyRequestUser.bind(this);

        this.strategyUser = new passportLocal.Strategy({
            passwordField: 'password',
            usernameField: 'email',
            passReqToCallback: true,
            // session: false,

        }, this.verifyRequestUser);
    }

    public async verifyRequestUser(req: Request, email: string, password: string, done: any) {
        
        const { User } = this.di;
        const user = await User.findOne({
            where : { email }
        });

        if (!user) {
            return done('Incorrect email or password');

        }
    }
}
