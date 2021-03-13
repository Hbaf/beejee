import { TaskStatus } from 'models';


export const INDEX_URL = '/';
export const LOGIN_URL = '/login';

export const TASK_STATUS_NAMES: Record<TaskStatus, string> = {
	[TaskStatus.Created]: 'Не выполнена',
	[TaskStatus.Created_Edited]: 'Не выполнена. Отредактирована',
	[TaskStatus.Complete]: 'Выполнена',
	[TaskStatus.Complete_Edited]: 'Выполнена. Отредактирована',
};

// regExp from http://emailregex.com/
// eslint-disable-next-line max-len, no-useless-escape
export const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const DEFAULT_MESSAGE_TIMEOUT = 4000;

export const DEFAULT_TASK_AMOUNT_ON_PAGE = 3;
