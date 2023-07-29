import express from 'express';
import BodyParser from 'body-parser';

import Router from './router';
import { StartMysql } from './mysql';

const app = express();

StartMysql();

app.use((req, res, next) => {
	// console.log(req, res);
	next();
});
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());

app.use(Router);

app.listen(3000, () => {
	console.log('start server successfully');
});
