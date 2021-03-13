import { ITask } from 'models';


interface CreateTaskSuccessfullResponse {
	status: 'ok';
	message: ITask;
}

interface CreateTaskFailedResponse {
	status: 'error';
	message: {
		username: string;
		email: string;
		text: string;
	};
}

export type CreateTaskResponse = CreateTaskSuccessfullResponse | CreateTaskFailedResponse;
