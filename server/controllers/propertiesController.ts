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
    const { Properties, Reviews, User } = this.di;
    const properties = await Properties.findAll({
      include: [{ model: Reviews }, { model: User }],
    });
    return res.json(properties);
  }

  @route("/:id")
  @GET()
  async getOne(req, res) {
    const { id } = req.params;
    const { Properties, Reviews, User } = this.di;
    Properties.findOne({
      where: { id },
      include: [
        {
          model: Reviews,
          include: [
            {
              model: User,
            },
          ],
        },
        {
          model: User,
        },
      ],
    }).then((properties) => res.json(properties));
  }
}
