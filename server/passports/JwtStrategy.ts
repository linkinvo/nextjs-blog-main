import { IContextContainer } from './../container';
import BaseContext from "../baseContext";
import { Strategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import { Request } from 'express';
import config from '../../config';
import { IIdentity } from '../common';

export default class JwtStrategy extends BaseContext {
    private _strategy: Strategy;
    private request: Request;


    get strategy() {
        return this._strategy;
    }

    constructor(opts: IContextContainer) {
        super(opts);
        console.log('jwt: initialization JWT strategy');

        this.verifyRequest = this.verifyRequest.bind(this);
        this.getJwtFromRequest = this.getJwtFromRequest.bind(this);
        console.log('before');

        this._strategy = new Strategy({
            jwtFromRequest: this.getJwtFromRequest,
            secretOrKey: config.jwtSecret,
        }, this.verifyRequest);
    }

    public verifyRequest(jwtPayload, done: VerifiedCallback) {
        console.log('jwt: verifyRequest', jwtPayload);
        const user = this.di.UserService.findOneByID(jwtPayload.id);
        console.log('verify request user', user);

        if (user) {
            return done(null, jwtPayload);
        }
        return done('Incorrect identity');
    }

    public getJwtFromRequest(req: Request) {
        this.request = req;
        const getToken = ExtractJwt.fromAuthHeaderAsBearerToken();
        console.log('getToken', getToken(req));
        return getToken(req) || req.cookies['token'] || null;
    }
}

