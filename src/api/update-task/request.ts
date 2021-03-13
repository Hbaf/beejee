import { TaskId, TaskStatus, Token } from 'models';


export interface UpdateTaskRequestParams {
	taskId: TaskId;
}

export interface UpdateTaskRequestData {
	token: Token;
	text: string;
	status: TaskStatus;
}
