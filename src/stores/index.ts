import { makeAutoObservable } from 'mobx';

import UiStore from './ui';
import ApiStore from './api';
import AuthStore from './auth';
import DataStore from './data';


export default class IndexStore {
	ui: UiStore;

	api: ApiStore;

	auth: AuthStore;

	data: DataStore;

	currentUrl = '';

	constructor() {
		this.ui = new UiStore();
		this.api = new ApiStore();
		this.auth = new AuthStore(this.api, this.ui);
		this.data = new DataStore(this.api, this.ui, this.auth);

		makeAutoObservable(this);
	}

	setCurrentUrl(url: string) {
		this.currentUrl = url;
	}
}
