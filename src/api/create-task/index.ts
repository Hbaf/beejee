import { ApiRequest } from 'stores/api';

import { CreateTaskRequestData } from './request';
import { CreateTaskResponse } from './response';


export default function createTask(request: ApiRequest, data: CreateTaskRequestData) {
	return request.post<CreateTaskResponse>('/create', data);
}
