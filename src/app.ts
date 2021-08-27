import * as express from 'express';
import * as bodyParser from "body-parser";
import "reflect-metadata";
import { createConnection } from 'typeorm';
import * as appConfig from './common/app-config';

/**
 * Create Express server.
 */
const app = express();

//enable cors
const cors=require('cors');
app.use(cors());


//configure body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//set rote in rotes/route.ts
var routes=require('./routes/route');
app.use(routes);
/**
 * Express configuration.
 */
app.set("port", process.env.PORT || 3005);

/**
 * Start Express server.
 */
app.listen(app.get("port"), () => {
  console.log(("App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
  console.log("Press CTRL-C to stop\n");
  //console.log(__dirname+'/**');
});

/**
 * Create connection to DB using configuration provided in 
 * appconfig file.
 */
createConnection(appConfig.dbOptions)
.then(async connection=>{
  console.log("connected to db");
})
.catch(error=>console.log("TypeORM connection error :",error));


module.exports = app;