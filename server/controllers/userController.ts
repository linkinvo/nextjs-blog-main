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
}
