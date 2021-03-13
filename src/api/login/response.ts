interface LoginSuccessfullResponse {
	status: 'ok';
	message: {
		token: string;
	};
}

interface LoginFailedResponse {
	status: 'error';
	message: string;
}

export type LoginResponse = LoginSuccessfullResponse | LoginFailedResponse;
