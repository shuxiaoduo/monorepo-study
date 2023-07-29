import mysql from 'mysql2';

export let connection: any = null;

export const StartMysql = () => {
	// create the connection to database
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '123456',
		database: 'todoList',
	});
	return connection;
};
