import BaseContext from "../baseContext";
import { route, GET, POST } from "awilix-express";

@route("/api/properties")
export default class PropertiesController extends BaseContext {
  @route("/create")
  @POST()
  async create(req, res) {
    // res.send(await this.propertiesService.get(req.params.id));
  }

  @route("/get")
  @GET()
  async getAll(req, res) {
    const properties = await this.di.Properties.findAll();
    return res.json(properties);
  }

  @route("/:id")
  @GET()
  async getOne(req, res) {
    const { id } = req.params;
    this.di.Properties.findOne({ where: { id } }).then((properties) => {
      res.json(properties);
    });
  }
}
