import * as express from 'express';
import * as bodyparser from 'body-parser';
import * as cors from 'cors';
import * as helmet from 'helmet';

class App {

    private app: express.Application;
    private port: number;
   
    constructor(controllers, port) {
      this.app = express();
      this.port = port;
   
      this.initializeMiddlewares();
      this.initializeControllers(controllers);
    }
   
    private initializeMiddlewares() {
        this.app.use(cors({ origin: 'http://127.0.0.1:3030' }));
        this.app.use(helmet());
        this.app.use(bodyparser.json());
    }
   
    private initializeControllers(controllers) {
      controllers.forEach((controller) => {
        this.app.use('/', controller.router);
      });
    }
   
    public listen() {
      this.app.listen(this.port, () => {
        console.log(`node server start... on the port ${this.port}`);
      });
    }
}
   
export default App;

