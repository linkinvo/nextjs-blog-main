import BaseContext from "../baseContext";
import { route, GET, POST } from "awilix-express";

@route("/api/reviews")
export default class ReviewsController extends BaseContext {

  @route("/create")
  @POST()
  create(req, res) {}

  @route("/get")
  @GET()
  async getAll(req, res) {
    const { Properties, Reviews, User} = this.di;
    const reviews = await Reviews.findAll({ include: [{ model: Properties }, { model: User }]});
    return res.json(reviews);
  }

  @route("/:id")
  @GET()
  async getOne(req, res) {
    const { id } = req.params;
    const { Properties, Reviews, User} = this.di;
      Reviews.findOne({where: { id },  include: [{ model: Properties }, { model: User }]})
    .then((reviews) => res.json(reviews));
  }
  
}
