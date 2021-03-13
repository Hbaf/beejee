import { makeAutoObservable } from 'mobx';

import { UserMessage, UserMessageType } from 'models';
import { DEFAULT_MESSAGE_TIMEOUT } from 'consts';


export default class UiStore {
	messageList: Array<UserMessage> = [];

	constructor() {
		makeAutoObservable(this);
	}

	private addMessage(type: UserMessageType, text: string) {
		const id = String(new Date().getMilliseconds());
		this.messageList.push({ id, type, text });
		setTimeout(() => this.removeMessage(id), DEFAULT_MESSAGE_TIMEOUT);
	}

	addSuccessMessage(text: string) {
		this.addMessage(UserMessageType.Success, text);
	}

	addErrorMessage(text: string) {
		this.addMessage(UserMessageType.Error, text);
	}

	addWarningMessage(text: string) {
		this.addMessage(UserMessageType.Warning, text);
	}

	addInfoMessage(text: string) {
		this.addMessage(UserMessageType.Info, text);
	}

	private removeMessage(id: string) {
		this.messageList = this.messageList.filter(message => message.id !== id);
	}
}
