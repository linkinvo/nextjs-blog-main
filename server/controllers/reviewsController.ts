import BaseContext from "../baseContext";
import { route, GET, POST } from "awilix-express";
import { Request, Response } from 'express';

@route("/api/reviews")
export default class ReviewsController extends BaseContext {

  @route("/create")
  @POST()
  create(req, res) { }

  // @route("/get")
  // @GET()
  // async getAll(req, res) {
  //   const { PropertiModel, ReviewsModel, UserModel} = this.di;
  //   const reviews = await ReviewsModel.findAll({ include: [{ model: PropertiModel }, { model: UserModel }]});
  //   return res.json(reviews);
  // }

  // @route("/get/:id")
  // @GET()
  // async getOne(req, res) {
  //   const { id } = req.params;
  //   const { PropertiModel, ReviewsModel, UserModel} = this.di;
  //     ReviewsModel.findOne({
  //       where: { id },  
  //       include: [
  //         { 
  //           model: PropertiModel 
  //         },
  //          {
  //             model: UserModel 
  //           }
  //         ]
  //       })
  //   .then((reviews) => res.json(reviews));
  // }

  @route("/")
  @GET()
  getAllReviews(req: Request, res: Response) {
    const { ReviewsServices } = this.di;

    const result = ReviewsServices.findAll()
    .then(reviews => {
      const props = {
        data: reviews,
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

  @route("/save/:id")
  @POST()
  save(req: Request, res: Response) {
    const { ReviewsServices } = this.di;

    const result = ReviewsServices.save(req.body, req.params.id)
    .then(reviews => {
      const props = {
        data: reviews,
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
    const { ReviewsServices } = this.di;

    const result = ReviewsServices.findOneByID(req.params.id)
      .then(reviews => {
        const props = {
          data: reviews,
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

}
