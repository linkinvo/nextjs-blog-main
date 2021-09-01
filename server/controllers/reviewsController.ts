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
    const reviews = await this.di.Reviews.findAll();
    return res.json(reviews);
  }

  @route("/:id")
  @GET()
  async getOne(req, res) {
    const { id } = req.params;
    this.di.Reviews.findOne({where: { id }})
    .then((reviews) => res.json(reviews));
  }
  
}
