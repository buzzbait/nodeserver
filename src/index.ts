import  App  from './app';
import {createConnection} from 'typeorm';
import dbConnectionConfig from './config/db.config';
import CommonController from './controllers/common.controller';

/*******************************************************************************************
 * AP 시작전에 DB연결을 시작 하고 성공시에 서버를 시작 한다
 *******************************************************************************************/
createConnection(dbConnectionConfig).then(() =>{
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
