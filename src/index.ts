import  App  from './app';
import CommonController from './controllers/controller.common';
const app = new App(
  [
    /*모든 컨트롤러를 등록해준다*/
    new CommonController(),
  ],
  3000,
);
 
app.listen();