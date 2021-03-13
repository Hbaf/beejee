import { ApiRequest } from 'stores/api';

import { GetTaskListRequestParams } from './request';
import { GetTaskListResponse } from './response';


export default function getTaskList(request: ApiRequest, params: GetTaskListRequestParams) {
	return request.get<GetTaskListResponse>('/', params);
}
