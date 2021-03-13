import { makeAutoObservable } from 'mobx';

import { Token } from 'models';

import UiStore from './ui';
import ApiStore from './api';


export default class AuthStore {
	token = '';

	username = '';

	password = '';


	constructor(private apiStore: ApiStore, private uiStore: UiStore) {
		makeAutoObservable(this);
	}

	login = async () => {
		try {
			const data = {
				username: this.username,
				password: this.password,
			};
			const response = await this.apiStore.login(data);
			if (response.status === 'ok') {
				this.setToken(response.message.token);
				this.clearForm();
				this.uiStore.addSuccessMessage('Успешная авторизация');

				return;
			}
		} catch { /** */ }
		this.uiStore.addErrorMessage('Не удалось авторизоваться');
	}

	logout = () => {
		this.token = '';
	}

	setUserName = (name: string) => {
		this.username = name;
	}

	setPassword = (pass: string) => {
		this.password = pass;
	}

	private setToken = (token: Token) => {
		this.token = token;
	}

	private clearForm = () => {
		this.username = '';
		this.password = '';
	}
}
