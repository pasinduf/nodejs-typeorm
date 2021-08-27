import "reflect-metadata";
import {ConnectionOptions} from "typeorm";

 export let dbOptions: ConnectionOptions = {
    type: "mssql",
    host: "FTD-NB-PASINDU",
    port:1433,
    username: "testuser2",
    password: "Test@1231",
    database: "NodeJsWithTypeORMDb",
    entities: ["./entities/*.js"],
    migrations:["../src/migration/**/*.ts"],
    synchronize: true,
    logging:false
}