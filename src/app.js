import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import routes from './routes';

class App {
  constructor(){
    this.server = express();

    mongoose. connect('mongodb+srv://devhouse:devhouse1@cluster0.ji0u4vt.mongodb.net/devhouse?retryWrites=true&w=majority&appName=Cluster0');

    this.midddlewares();
    this.routes();

  }

  midddlewares() {
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    )


    this.server.use(express.json());
  }

routes() {
  this.server.use(routes);
 }
}


export default new App().server;

