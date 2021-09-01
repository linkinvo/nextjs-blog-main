import BaseContext from '../baseContext';
const { route, GET, POST } = require("awilix-express");

@route("/api/users")
export default class UserController extends BaseContext {
  
  @route("/registration")
  @POST()
  async registration(req, res) {

  }

  @route("/login")
  @POST()
  login(req, res) {}

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
