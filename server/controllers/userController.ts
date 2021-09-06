
import BaseContext from '../baseContext';

import { Request, Response, NextFunction } from 'express';
import  { route, GET, POST } from "awilix-express";

@route("/api/users")
export default class UserController extends BaseContext {
  
  @route("/registration")
  @POST()
  public registration(req: Request, res: Response, next: NextFunction) {
    const { passport } = this.di;
    console.log('AAAAAAAAAA passport AAAAAAAAAA', passport);
    
    return passport.authenticate('local-signup', (errors, identity) => {
      if (errors) {
        console.log('Register errors: ', errors);
        res.answer(null, errors)

      } else if (identity) {
        res.answer([identity], 'Registration completed successfully!!! You can now log in.')
      } else {
        console.log('Register catch : ', errors)
        res.answer(null, 'Could not process')
      }
    })(req, res, next);
  }


  @route('/login')
  @POST()
  public login(req: Request, res: Response, next: NextFunction) {
    console.log('LOGIN controller');

    const { passport } = this.di;

    return passport.authenticate('local-login', (err, identity) => {
      console.log('login controller passport ', identity);
      if (err) {
        return res.answer(null, err);
      }
      return res.answer(identity);
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
