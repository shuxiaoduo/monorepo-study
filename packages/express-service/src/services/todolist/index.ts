import { connection } from '../../mysql';
import ListStatusType from '../../constant/list-status-type';

export class TodoService {
	constructor() {}

	add(params: { content: string }) {
		return new Promise((resolve, reject) => {
			// simple query
			connection.query(
				`insert into  todo_list(content, list_status) values ("${params.content}", "${ListStatusType.INIT}")`,
				function (err, results) {
					if (err) {
						reject(err);
					}
					resolve(results);
				}
			);
		});
	}

	list(params: Record<string, any>) {
		const { listStatus } = params;

		return new Promise((resolve, reject) => {
			connection.query(
				`select * from todo_list${
					listStatus ? ` where list_status = "${listStatus}"` : ''
				}`,
				function (err, results) {
					if (err) {
						reject(err);
					}
					resolve(results);
				}
			);
		});
	}
}

export default new TodoService();
