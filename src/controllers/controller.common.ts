import * as express from 'express';

class CommonController{
    private path = '/common';
    private router = express.Router();

    constructor() {
        this.intializeRoutes();
    }
     
    private intializeRoutes() {
        this.router.get(this.path + '/info', this.apiInfo);        
    }

    apiInfo = (request: express.Request, response: express.Response) => {
        response.send({status:0,message : 'node 서버 입니다'});
    }
}

export default CommonController;