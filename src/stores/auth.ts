import { makeAutoObservable } from 'mobx';

import { Token } from 'models';

import UiStore from './ui';
import ApiStore from './api';


const cookieName = 'token';
export default class AuthStore {
	token = '';

	username = '';

	password = '';


	constructor(private apiStore: ApiStore, private uiStore: UiStore) {
		this.isTokenExist();
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
				this.saveToken();
				this.clearForm();
				this.uiStore.addSuccessMessage('Успешная авторизация');

				return;
			}
		} catch { /** */ }
		this.uiStore.addErrorMessage('Не удалось авторизоваться');
	}

	logout = () => {
		this.token = '';
		this.clearToken();
	}

	setUserName = (name: string) => {
		this.username = name;
	}

	setPassword = (pass: string) => {
		this.password = pass;
	}

	isTokenExist(): boolean {
		const cookie = document.cookie.split('; ').map(cook => cook.split('=', 2));
		const cook = cookie.find(cook => cook[0] === cookieName);
		const exist = Boolean(cook);
		if (!exist) {
			this.setToken('');
		} else if (!this.token) {
			this.setToken(cook![1]);
		}

		return exist;
	}

	saveToken() {
		const date = new Date();
		date.setDate(date.getDate() + 1);
		document.cookie = `${cookieName}=${this.token}; path="/"; expires=${date.toUTCString()}`;
	}

	clearToken() {
		document.cookie = `${cookieName}=; path="/"; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
	}

	private setToken = (token: Token) => {
		this.token = token;
	}

	private clearForm = () => {
		this.username = '';
		this.password = '';
	}
}
