import {Singleton} from 'typescript-ioc';
import {getManager }from 'typeorm';
import {Demotran} from '../entities/demotran';

@Singleton
class CommonService{

    public iocMethod(){
        return {status:0,message : 'ioc 테스트 입니다 !'};
    }
    
    
    public async findDb(){

        const demoTranRepository = getManager().getRepository(Demotran);

        const demoTran = await demoTranRepository.findOne(1);

        if(!demoTran){            
            return ({status:-1,message : 'not found data!'});
        }

        return demoTran;
    }
  
}

export default CommonService;