import { ITask } from 'models';


export interface GetTaskListResponse {
	status: string;
	message: {
		tasks: Array<ITask>;
		total_task_count: string;
	}
}
