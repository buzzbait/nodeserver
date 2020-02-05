import * as dotenv from 'dotenv';
import { resolve } from "path";
import {ConnectionOptions} from 'typeorm';
/*====================================================================================================
    기본환경파일 설정에 따른 주요 환경파일을 로딩 process.env 에 로딩
    .env 파일에 dev(개발환경), test(테스트서버) ,prod(운영환경) 정의
    각 환경에 맞게 env 폴더에서 환경파일 로딩
====================================================================================================*/
class EnvConfig{

    private envMode : string;
    constructor() {
        //1. 기본 환경파일(.env)의 설정값을 dotenv 에 로딩
        dotenv.config();
        this.envMode = process.env.NODE_ENV;
        console.log('실행환경 : ' + this.envMode);
        this.initEnv();
    }
    private initEnv(){
        //2. 환경구분에 따른 환경파일 로딩
        let envfileName : string;
        envfileName = '../../env/' + this.envMode + '.env';
        dotenv.config({ path: resolve(__dirname, envfileName) });        
    }

    /***********************************************************************************************
     * typeorm 연결 옵션
     * synchronize 를 true 로 하면 최초 실행시에 동기화 작업이 발생되어 기존 데이터가 위험해진다
     * typeorm 의 경우 defalut 로 connection pool 을 10개로 설정, 수정하려면 아래와 같이 설정
       "extra": {
            "connectionLimit": 5
        }
    ***********************************************************************************************/
    public getConnectionOption() {
        const dbConnectionOption : ConnectionOptions = {
            type: "mariadb",
            database: process.env.DB_DATABASE,
            synchronize: false,
            logging: true,
            entities: ["src/entities/*.*"],
            host: process.env.DB_HOST,
            port: +process.env.DB_PORT, //number type 이기 때문에 + 를 붙여준다
            username: process.env.DB_USER,
            password: process.env.DB_PASS
        }

        return dbConnectionOption;
    }
}

export default EnvConfig;