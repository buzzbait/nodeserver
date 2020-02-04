import * as express from 'express';
import {getManager }from 'typeorm';
import {Demotran} from '../entities/demotran';

class CommonController{
    private path = '/common';
    private router = express.Router();

    constructor() {
        this.intializeRoutes();
    }
     
    private intializeRoutes() {
        this.router.get(this.path + '/info', this.apiInfo);        
        this.router.get(this.path + '/typeorm', this.typeOrmTest);        
    }

    private apiInfo = (request: express.Request, response: express.Response) => {
        response.send({status:0,message : 'node 서버 입니다'});
    }

    private typeOrmTest = async (request: express.Request, response: express.Response) => {
        const demoTranRepository = getManager().getRepository(Demotran);

        const demoTran = await demoTranRepository.findOne(1);

        console.log(demoTran);

        if(!demoTran){
            response.status(404) ;
            response.end();
            return;
        }

        response.send(demoTran);
    }

}

export default CommonController;