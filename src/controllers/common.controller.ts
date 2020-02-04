import * as express from 'express';
import {getManager }from 'typeorm';
import {Demotran} from '../entities/demotran';
import {Inject} from 'typescript-ioc';
import CommonService from '../services/common.service';

class CommonController{
    private path = '/common';
    private router = express.Router();

    @Inject
    private _commonService : CommonService;

    constructor() {
        this.intializeRoutes();
    }
     
    private intializeRoutes() {
        this.router.get(this.path + '/info', this.apiInfo);        
        this.router.get(this.path + '/typeorm', this.typeOrmTest);        
        this.router.get(this.path + '/ioctest', this.iocTest);        
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

    private iocTest = async(request: express.Request, response: express.Response) => {

        const result = await this._commonService.findDb();

        console.log(result);
        response.json( result);        
        //response.json(this._commonService.findDb());
        //response.send(this._commonService.iocMethod() );
    }


}

export default CommonController;