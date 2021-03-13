import { ApiRequest } from 'stores/api';

import { LoginRequestData } from './request';
import { LoginResponse } from './response';


export default function login(request: ApiRequest, data: LoginRequestData) {
	return request.post<LoginResponse>('/login', data);
}
