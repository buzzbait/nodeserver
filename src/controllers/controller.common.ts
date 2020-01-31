import * as express from 'express';

class CommonController{
    public path = '/common';
    public router = express.Router();

    constructor() {
        this.intializeRoutes();
    }
     
    public intializeRoutes() {
        this.router.get(this.path + '/info', this.apiInfo);        
    }

    apiInfo = (request: express.Request, response: express.Response) => {
        response.send({status:0,message : 'api 서버 입니다'});
      }
}

export default CommonController;