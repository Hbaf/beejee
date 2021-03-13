export enum LoadingStatus {
	Loading,
	Initial,
}

export enum TaskStatus {
	Created = 0,
	Created_Edited = 1,
	Complete = 10,
	Complete_Edited = 11,
}

export type TaskId = number;

export interface ITask {
	id: TaskId;
	username: string;
	email: string;
	text: string;
	status: TaskStatus;
}

export type SortField = 'id' | 'username' | 'email' | 'status';

export type SortOrder = 'asc' | 'desc';

export type Token = string;

export enum UserMessageType {
	Success,
	Error,
	Warning,
	Info,
}

export interface UserMessageBase {
	type: UserMessageType;
	text: string;
}

export interface UserMessage extends UserMessageBase {
	id: string;
}
