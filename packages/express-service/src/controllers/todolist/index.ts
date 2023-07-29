import { Request, Response } from 'express';
import ToDoListService from '../../services/todolist';

class TodoListController {
	constructor() {}

	async add(req: Request, res: Response) {
		const {
			body: { content },
		} = req;
		await ToDoListService.add({ content });

		res.send({
			code: 0,
		});
	}

	async list(req: Request, res: Response) {
		console.log(req.query);
		const list = await ToDoListService.list(req.query);

		res.send({
			code: 0,
			list: list,
		});
	}
}

export default new TodoListController();
