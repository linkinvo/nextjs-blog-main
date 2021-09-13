import { IIdentity } from '../../src/common';

import BaseContext from '../baseContext';

import { Request, Response, NextFunction } from 'express';
import { route, GET, POST } from "awilix-express";

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
          message: 'Could not process register'
        })
      }
    })(req, res, next);
  }


//   @POST()
//   @route('/login')
//   public login(req: Request, res: Response, next: NextFunction) {

//     const { passport } = this.di;

//     // tslint:disable-next-line: no-shadowed-variable
//     return passport.authenticate('local-login', (err, identity: IIdentity) => {
//         console.log('login controller passport', identity);
//         if (err) {
//             return res.json(null, err);
//         }
//         res.cookie('token', identity.token, { maxAge: 1000606024 });
//         return res.json(identity);
//     })(req, res, next);
// }


  @POST()
  @route('/login')
  public login(req: Request, res: Response, next: NextFunction) {
    const { passport } = this.di;

    return passport.authenticate('local-login', (errors, identity) => {
      console.log('login controller passport ', identity);
      if (identity) {
        res.cookie('token', identity.token, { maxAge: 1000606024},  {message: 'You have successfully logged in!'})
        return res.json(identity);
      } else {
        console.log('Validations denied : ', errors)
        res.json({
          identity: null,
          message: 'Could not process validations'
        })
      }
    })(req, res, next);

  }




  // @POST()
  // @route('/auth')
  // public jwt(req:Request, res: Response, next: NextFunction) {
  //   console.log('AUTH!!!!!!!!!!!!!!!!!!');
  //   const { passport } = this.di;
  //   console.log(2);

  //   return passport.authenticate('jwt', (err, identity) => {
  //     const isLogged = identity && identity.id;
  //     req.identity = identity;
  //     if(!isLogged) {
  //       // req.session.identity = identity;
  //     }
  //     const isAllow = undefined
  //     if(!isAllow) {
  //       return res.json(null, console.log('NOT FOUND 404'))
  //     }
  //   })
  // }

  @route('/')
  @GET()
  getAll(req: Request, res: Response) {
    const { UserService } = this.di
    const result = UserService.findAll()
      .then(users => {
        const props = {
          data: users,
          message: "users are found successfully",
          error: false
        }
        res.send(props);
      })
      .catch(err => {
        const props = {
          data: null,
          message: err,
          error: true
        }
        res.status(500).send(props);
      });
    return result
  }

  @route('/save/:id')
  @POST()
  save(req: Request, res: Response) {
    const { UserService } = this.di;

    const result = UserService.save(req.body, req.params.id)
      .then(users => {
        const props = {
          data: users,
          message: "users are found successfully",
          error: false
        }
        res.send(props);
      })
      .catch(err => {
        const props = {
          data: null,
          message: err,
          error: true
        }
        res.status(500).send(props);
      });

    return result
  }


  @route('/:id')
  @GET()
  getById(req: Request, res: Response) {
    const { UserService } = this.di;

    const result = UserService.findOneByID(req.params.id)
      .then(users => {
        const props = {
          data: users,
          message: "users are found successfully",
          error: false
        }
        res.send(props);
      })
      .catch(err => {
        const props = {
          data: null,
          message: err,
          error: true
        }
        res.status(500).send(props);
      });
    return result
  }


  // @route('/delete/:id')
  // @DELETE()
  // delete(req: Request, res: Response) {
  //   const { UserService } = this.di;

  //   const result = UserService.deleteByID(req.params.id)
  //     .then((data) => {
  //       res.status(200).send(data)
  //     })
  //     .catch((err) => {
  //       res.json(null, err, "error")
  //     })
  //     return result
  // }

}
//   .then(users => {
//     const props = {
//         data: users,
//         message: "users are found successfully",
//         error: false
//     }
//     res.send(props);
// })
// .catch(err => {
    // const props = {
    //     data: null,
    //     message: err,
    //     error: true
    // }
//     res.status(500).send(props);
// })