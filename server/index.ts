
import next from "next";
import express from "express";
import bodyParser from "body-parser";
import { loadControllers, scopePerRequest } from 'awilix-express';
import fileUpload from 'express-fileupload'
import {PassportStatic} from 'passport';

import container from "./container";



const passport = container.resolve<PassportStatic>('passport')


const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express()



  server.use(bodyParser.json({ limit: '10mb' }));
  server.use(passport.initialize());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(fileUpload({}));

  server.use(scopePerRequest(container));
  const files = 'controllers/**/*.ts';
  server.use(loadControllers(files, { cwd: __dirname }));

  
  server.all('*', (req, res) => {
    return handle(req, res)
  })
  
  server.listen(port, (err) => {
    if (err) throw err
    console.log(
      `> Server listening at http://localhost:${port} as ${
        dev ? "development" : process.env.NODE_ENV
      }`
    );

  })

  // tslint:disable-next-line:no-console
  
});

