import  BaseContext from '../baseContext';
const { route, GET, POST } = require("awilix-express");

@route("/api/reviews")
export default class ReviewsController extends BaseContext {
  
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
    this.di.Reviews.findOne({
      where: { id },
    }).then((reviews) => {
      res.json(reviews);
    });
  }
}
