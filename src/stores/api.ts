import _login from 'api/login';
import { LoginRequestData } from 'api/login/request';
import { LoginResponse } from 'api/login/response';

import _getTaskList from 'api/get-task-list';
import { GetTaskListRequestParams } from 'api/get-task-list/request';
import { GetTaskListResponse } from 'api/get-task-list/response';

import _createTask from 'api/create-task';
import { CreateTaskRequestData } from 'api/create-task/request';
import { CreateTaskResponse } from 'api/create-task/response';

import _updateTask from 'api/update-task';
import { UpdateTaskRequestData, UpdateTaskRequestParams } from 'api/update-task/request';
import { UpdateTaskResponse } from 'api/update-task/response';


const baseApiUrl = 'https://uxcandy.com/~shapoval/test-task-backend/v2';
const developerName = 'rifnur';

export interface ApiRequest {
	get: <T>(url: string, params: string | object) => Promise<T>;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	post: <T>(url: string, data: any) => Promise<T>;
}

export default class ApiStore {
	request: ApiRequest = {
		get: <T>(url: string, params: string | object) => {
			const requestParams = typeof params === 'string' ?
				params
				:
				Object.entries(params).map(value => `${value[0]}=${value[1]}`)
					.join('&');
			const requestUrl = `${baseApiUrl + url}?developer=${developerName}${requestParams ? `&${requestParams}` : ''}`;

			return fetch(requestUrl).then(response => response.json() as unknown as T);
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		post: <T>(url: string, data: any) => {
			const requestUrl = `${baseApiUrl + url}?developer=${developerName}`;
			const formData = new FormData();
			Object.entries(data).forEach(item => {
				formData.set(item[0], data[item[0]]);
			});

			return fetch(requestUrl, { method: 'POST', body: formData }).then(response => response.json() as unknown as T);
		}
	}

	login = (data: LoginRequestData): Promise<LoginResponse> => _login(this.request, data)

	getTaskList = (params: GetTaskListRequestParams): Promise<GetTaskListResponse> => _getTaskList(this.request, params)

	createTask = (data: CreateTaskRequestData): Promise<CreateTaskResponse> => _createTask(this.request, data)

	editTask = (params: UpdateTaskRequestParams, data: UpdateTaskRequestData): Promise<UpdateTaskResponse> => _updateTask(this.request, params, data)
}
