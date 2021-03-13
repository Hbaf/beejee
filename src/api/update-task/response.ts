interface UpdateTaskSuccessfullResponse {
	status: 'ok';
}

interface UpdateTaskFailedResponse {
	status: 'error';
	message: unknown | {
		token: string;
	};
}

export type UpdateTaskResponse = UpdateTaskSuccessfullResponse | UpdateTaskFailedResponse;
