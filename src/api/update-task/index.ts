import { ApiRequest } from 'stores/api';

import { UpdateTaskRequestData, UpdateTaskRequestParams } from './request';
import { UpdateTaskResponse } from './response';


export default function updateTask(request: ApiRequest, params: UpdateTaskRequestParams, data: UpdateTaskRequestData) {
	return request.post<UpdateTaskResponse>(`/edit/${ params.taskId}`, data);
}
