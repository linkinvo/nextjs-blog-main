
import BaseContext from '../baseContext';

import { Request, Response, NextFunction } from 'express';
import  { route, GET, POST } from "awilix-express";

@route("/api/users")
export default class UserController extends BaseContext {
  
  @route("/registration")
  @POST()
  public registration(req: Request, res: Response, next: NextFunction) {
    const { passport } = this.di;

    return passport.authenticate('local-signup', (errors, identity) => {
      if (identity) {
        res.json({
          identity,
          message: 'Registration completed successfully!!! You can now log in.'
        })
      } else {
        console.log('Register catch : ', errors)
        res.status(301).json({
            identity: null,
            message: 'Could not process'
        })
      }
    })(req, res, next);
  }

  @POST()
    @route('/login')
    public login(req: Request, res: Response, next: NextFunction) {
        const { passport } = this.di;

        return passport.authenticate('local-login', (errors, identity) => {
      console.log('login controller passport ', identity);
          if (identity) {
            res.json({
              identity,
              message: 'You have successfully logged in!'
            })
          } else {
            console.log('Validations denied : ', errors)
            res.status(301).json({
                identity: null,
                message: 'Could not process'
            })
          }            
        })(req, res, next);
    }


  @route("/check")
  @POST()
  check(req, res) {}


  @route('/:id')
  @GET()
  getById(req, res) {
    const {id} = req.params;
    this.di.User.findOne({where: {id}})
    .then((user) => res.json(user))
  }
  
}
