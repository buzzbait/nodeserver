import * as express from 'express'
const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('node api server!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});