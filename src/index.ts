import  App  from './app';
import CommonController from './controllers/controller.common';
const app = new App(
  [
    new CommonController(),
  ],
  3000,
);
 
app.listen();