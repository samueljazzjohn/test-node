import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import envData from './config/appconfig'


const app = express();
app.use(cors({
  origin: ['*'],
  credentials: true,
}));

import indexRouter from './router/index';



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.use('/v1', indexRouter);


app.listen(envData.app.port, () => {
  console.log(`Server listening on port ${envData.app.port}`);
});

export default app;
function swaggerJsdoc(swaggerOptions: { swaggerDefinition: { info: { title: string; version: string; description: string; }; basePath: string; }; apis: string[]; }) {
  throw new Error('Function not implemented.');
}

