import {ConnectionOptions} from 'typeorm';

/***********************************************************************************************
 * synchronize 를 true 로 하면 최초 실행시에 동기화 작업이 발생되어 기존 데이터가 위험해진다
 ***********************************************************************************************/
const dbConnectionConfig : ConnectionOptions = {
    type: "mariadb",
    database: "jwtapi",
    synchronize: false,
    logging: true,
    entities: ["src/entities/*.*"],
    host: "localhost",
    port: 3306,
    username: "jwtapidemo",
    password: "jwtapidemo"    
}

export default dbConnectionConfig;