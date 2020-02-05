import  App  from './app';
import {createConnection} from 'typeorm';
import EnvConfig from './config/env.config';
import CommonController from './controllers/common.controller';

//환경파일 구성
const envConfig  = new EnvConfig();
envConfig.initEnv();

/*******************************************************************************************
 * AP 시작전에 DB연결을 시작 하고 성공시에 서버를 시작 한다
 *******************************************************************************************/
createConnection(envConfig.getConnectionOption() ).then(() =>{
  console.log('db연결.... 서버 start......');
  const app = new App(
    [
      /*모든 컨트롤러를 등록해준다*/
      new CommonController(),
    ],
    3000,
  );
   
  app.listen();
}).catch( error => console.log(error) );
