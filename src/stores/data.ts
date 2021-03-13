import { makeAutoObservable } from 'mobx';

import { ITask, LoadingStatus, SortField, SortOrder, TaskId } from 'models';
import { EMAIL_REGEXP } from 'consts';
import simpleSanitier from 'utils/sanitizer';

import UiStore from './ui';
import ApiStore from './api';
import AuthStore from './auth';


export default class DataStore {
	taskList: Array<ITask> = []

	totalTaskAmount = 0;

	username = '';

	email = '';

	text = '';

	sortField: SortField = 'id';

	sortOrder: SortOrder = 'asc';

	page = 1;

	loadingStatus: LoadingStatus = LoadingStatus.Initial;

	constructor(private apiStore: ApiStore, private uiStore: UiStore, private authStore: AuthStore) {
		makeAutoObservable(this);
		this.loadTaskList();
	}

	async loadTaskList() {
		try {
			const data = {
				sort_field: this.sortField,
				sort_direction: this.sortOrder,
				page: this.page,
			};
			const response = await this.apiStore.getTaskList(data);
			if (response.status === 'ok') {
				this.setTaskList(response.message.tasks);
				this.setTotalTaskAmount(Number(response.message.total_task_count));

				return;
			}
		} catch { /** */ }
		this.uiStore.addErrorMessage('Не удалось загрузить данные, попробуйте обновить страницу');
	}

	async createTask() {
		try {
			if (EMAIL_REGEXP.test(this.email)) {
				const data = {
					username: simpleSanitier(this.username.trim()),
					email: simpleSanitier(this.email.trim()),
					text: simpleSanitier(this.text.trim()),
				};
				const response = await this.apiStore.createTask(data);
				if (response.status === 'ok') {
					this.clearForm();
					this.loadTaskList();
					this.uiStore.addSuccessMessage('Задача успешна создана');

					return;
				}
			} else {
				this.uiStore.addWarningMessage('Поле email содержит невалидный email');
			}
		} catch (e) { /** */ }
		this.uiStore.addErrorMessage('Не удалось создать задачу');
	}

	async editTask(id: TaskId, text: string) {
		try {
			if (!this.authStore.isTokenExist()) {
				this.uiStore.addWarningMessage('Необходима авторизация');

				return;
			}
			const task = this.taskList.find(taskInst => taskInst.id === id);
			if (task && task.text !== text) {
				const data = {
					token: this.authStore.token,
					status: task.status % 10 ? task.status : task.status + 1,
					text: simpleSanitier(text.trim()),
				};
				const response = await this.apiStore.editTask({ taskId: id }, data);
				if (response.status === 'ok') {
					this.loadTaskList();
					this.uiStore.addSuccessMessage('Задача успешно обновлена');

					return;
				}
			}
		} catch { /** */ }
		this.uiStore.addErrorMessage('Не удалось обновить задачу');
	}

	async completeTask(id: TaskId) {
		try {
			const task = this.taskList.find(taskInst => taskInst.id === id);
			if (task) {
				const data = {
					token: this.authStore.token,
					status: Number(`1${task.status}`) % 100,
					text: task.text,
				};
				const response = await this.apiStore.editTask({ taskId: id }, data);
				if (response.status === 'ok') {
					this.loadTaskList();
					this.uiStore.addSuccessMessage('Задача успешно завершена');

					return;
				}
			}
		} catch { /** */ }
		this.uiStore.addErrorMessage('Не удалось завершить задачу');
	}

	setTaskList(list: Array<ITask>) {
		this.taskList = list;
	}

	setTotalTaskAmount(amount: number) {
		this.totalTaskAmount = amount;
	}

	setUserName = (name: string) => {
		this.username = name;
	}

	setEmail = (email: string) => {
		this.email = email;
	}

	setText = (text: string) => {
		this.text = text;
	}

	setSortField(field: SortField) {
		if (this.sortField === field) {
			this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
		} else {
			this.sortOrder = 'asc';
		}
		this.sortField = field;
		this.loadTaskList();
	}

	setLoadingStatus(status: LoadingStatus) {
		this.loadingStatus = status;
	}

	setPage(page: number) {
		this.page = page;
		this.loadTaskList();
	}

	clearForm() {
		this.username = '';
		this.email = '';
		this.text = '';
	}
}
